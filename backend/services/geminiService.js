import { GoogleGenAI } from "@google/genai";
import fs from "fs";

export const extractMedicineData = async (imagePath) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });


  const imageBytes = fs.readFileSync(imagePath);
  let response;

for (let i = 0; i < 3; i++) {
  try {
    response =
      await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: [{
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBytes.toString("base64"),
        },
      },
      `Look at this medicine package image and return ONLY valid JSON.

Format:
{
  "productName":"Medicine Name",
  "expiryDate":"YYYY-MM-DD"
}

If expiry is visible but day is missing, use 01.
Do not return markdown.
Do not return explanation.
Only JSON.`,]
      });

    break;
  } catch (error) {
    if (error.status === 503) {
      console.log(
        `Gemini busy. Retrying ${i + 1}/3...`
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );
    } else {
      throw error;
    }
  }
}



  let text = response.text.trim();

  text = text.replace(/```json/g, "");
  text = text.replace(/```/g, "");

  return JSON.parse(text);
};