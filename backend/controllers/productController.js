import fs from "fs";
import Product from "../models/Product.js";
import { extractMedicineData } from "../services/geminiService.js";


// @desc    Add a new product or scanned medicine
// @route   POST /api/products
// @access  Private
export const addProduct = async (req, res, next) => {
  const { productName, category, barcode, expiryDate, daysBeforeNotification } = req.body;

  try {
    const product = await Product.create({
      userId: req.user._id, // Injected automatically by authMiddleware
      productName,
      category,
      barcode,
      expiryDate,
      daysBeforeNotification,
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all active products/medicines for logged-in user
// @route   GET /api/products
// @access  Private
export const getProducts = async (
  req,
  res,
  next
) => {
  try {
    const products =
      await Product.find()
        .sort({ expiryDate: 1 });

    res.json(products);
  } catch (error) {
    next(error);
  }
};

// @desc    Update product status (e.g., mark as "Consumed", "Wasted", "Active")
// @route   PUT /api/products/:id
// @access  Private
export const updateProductStatus = async (req, res, next) => {
  const { status } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    // Verify ownership
    if (product.userId.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('User not authorized to update this item');
    }

    product.status = status || product.status;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a product from tracking entirely
// @route   DELETE /api/products/:id
// @access  Private
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    // Verify ownership
    if (product.userId.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('User not authorized to delete this item');
    }

    await product.deleteOne();
    res.json({ message: 'Product removed from tracking' });
  } catch (error) {
    next(error);
  }
};
export const scanMedicine = async (
  req,
  res,
  next
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Image required",
      });
    }

    const data = await extractMedicineData(
      req.file.path
    );

    const product = await Product.create({
      productName:
        data.productName ||
        "Unknown Medicine",
      category: "Medicine",
      expiryDate:
        data.expiryDate,
    });

    fs.unlinkSync(req.file.path);

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
