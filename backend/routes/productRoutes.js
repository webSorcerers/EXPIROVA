import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  addProduct,
  getProducts,
  updateProductStatus,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

// Route chains mapped to HTTP methods
router.route('/')
  .post(protect, addProduct)
  .get(protect, getProducts);

router.route('/:id')
  .put(protect, updateProductStatus)
  .delete(protect, deleteProduct);

export default router;