import { body, validationResult } from 'express-validator';
import Joi from 'joi';

// ---------- Joi Schemas (for complex validation) ----------
const productJoiSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().positive().required(),
  category: Joi.string().valid('electronics', 'clothing', 'books', 'other').required(),
  inStock: Joi.boolean().optional(),
  description: Joi.string().max(500).optional()
});

const productUpdateJoiSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  price: Joi.number().positive(),
  category: Joi.string().valid('electronics', 'clothing', 'books', 'other'),
  inStock: Joi.boolean(),
  description: Joi.string().max(500)
}).min(1); // At least one field to update

// ---------- Express Validator (for ID and basic checks) ----------
// We'll use express-validator for ID validation (already in routes)
// and use Joi for body validation in middleware.

// Middleware to validate request body using Joi (for create)
const validateProduct = (req, res, next) => {
  const { error } = productJoiSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));
    return res.status(400).json({
      success: false,
      errors
    });
  }
  next();
};

// Middleware to validate request body for update (partial allowed)
const validateProductUpdate = (req, res, next) => {
  const { error } = productUpdateJoiSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));
    return res.status(400).json({
      success: false,
      errors
    });
  }
  next();
};

// Middleware to check express-validator results (for ID)
const validateId = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  next();
};

export { validateProduct, validateProductUpdate, validateId };