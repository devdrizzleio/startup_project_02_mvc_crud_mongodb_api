import express from 'express';
import { param } from 'express-validator';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.controller.js';
import {
  validateProduct,
  validateProductUpdate,
  validateId
} from '../validators/product.validator.js';

const router = express.Router();

// Validation for ID parameter (used in multiple routes)
const idValidation = [
  param('id').isMongoId().withMessage('Invalid product ID format')
];

router.route('/')
  .get(getAllProducts)
  .post(validateProduct, createProduct);

router.route('/:id')
  .get(idValidation, validateId, getProductById)
  .put(idValidation, validateProductUpdate, updateProduct)
  .delete(idValidation, validateId, deleteProduct);

export default router;