import express from 'express';
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
} from '../controllers/PropertyController.js';

const router = express.Router();

// Create a new property
router.post('/properties', createProperty);

// Get all properties
router.get('/properties', getAllProperties);

// Get a property by ID
router.get('/properties/:id', getPropertyById);

// Update a property by ID
router.put('/properties/:id', updateProperty);

// Delete a property by ID
router.delete('/properties/:id', deleteProperty);

export default router;
