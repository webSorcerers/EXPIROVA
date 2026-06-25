import { useRef, useState, useEffect } from "react";
import API from "../api/axios";

export function Aiscancontent() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [productName, setProductName] = useState("Waiting...");
  const [expiryDate, setExpiryDate] = useState("Waiting...");
  const [loading, setLoading] = useState(false);
  const [stream, setStream] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());

      setStream(null);
    }

    setCameraOpen(false);
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && stream) {
        stopCamera();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [stream]);

  const handleScan = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      setStream(mediaStream);
      setCameraOpen(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch (error) {
      console.log(error);
      alert("Cannot access camera");
    }
  };

  const uploadImage = async (file) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", file);

      const res = await API.post("/products/scan", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProductName(res.data.productName || "Unknown Medicine");

      setExpiryDate(new Date(res.data.expiryDate).toLocaleDateString());

      alert("Medicine saved successfully!");
    } catch (err) {
      console.log(err);

      alert(JSON.stringify(err.response?.data || err.message, null, 2));
    } finally {
      setLoading(false);
    }
  };

  const captureImage = async () => {
    try {
      const canvas = canvasRef.current;

      const video = videoRef.current;

      canvas.width = video.videoWidth;

      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        async (blob) => {
          const file = new File([blob], "medicine.jpg", {
            type: "image/jpeg",
          });

          await uploadImage(file);

          stopCamera();
        },
        "image/jpeg",
        0.9,
      );
    } catch (error) {
      console.log(error);

      alert("Capture failed");
    }
  };

  return (
    <main
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Fullscreen Camera */}
      {cameraOpen && (
        <>
          <div className="fixed inset-0 z-10 bg-black">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          </div>

          {/* Scanner Overlay */}
          <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-4 border-cyan-400 rounded-xl relative">
              <div
                className="absolute left-0 w-full h-1 bg-cyan-400"
                style={{
                  animation: "scanMove 2s linear infinite",
                }}
              />
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={stopCamera}
            className="fixed top-24 right-6 z-50 bg-red-600 text-white px-4 py-2 rounded-full shadow-xl"
          >
            ✕ Close
          </button>
        </>
      )}

      {/* Status */}
      <div className="relative z-30 pt-6 flex justify-center">
        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
          <p className="text-white text-sm">
            {loading
              ? "Scanning..."
              : cameraOpen
                ? "Camera Active"
                : "Ready To Scan"}
          </p>
        </div>
      </div>

      {/* Result Card */}
      <div className="relative z-30 px-4 pt-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 max-w-lg mx-auto">
          <h3 className="text-white text-2xl font-bold">{productName}</h3>

          <p className="text-white mt-2">Expiry: {expiryDate}</p>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        style={{
          display: "none",
        }}
      />

      {/* Bottom Button */}
      <div className="fixed bottom-24 left-0 right-0 z-40 flex justify-center">
        {!cameraOpen ? (
          <button
            onClick={handleScan}
            className="bg-[#0d5f94] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl"
          >
            📷 Open Camera
          </button>
        ) : (
          <button
            onClick={captureImage}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl"
          >
            {loading ? "Scanning..." : "📸 Capture Medicine"}
          </button>
        )}
      </div>

      <style>
        {`
          @keyframes scanMove {
            0% {
              top: 0;
            }
            100% {
              top: 100%;
            }
          }
        `}
      </style>
    </main>
  );
}
