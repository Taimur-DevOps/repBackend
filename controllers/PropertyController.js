// import Property from '../models/PropertyModel.js';

// // Create a new property
// export const createProperty = async (req, res) => {
  
// };

// // Get all properties
// export const getAllProperties = async (req, res) => {
//   try {
//     const properties = await Property.find();
//     res.status(200).json(properties);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get a property by ID
// export const getPropertyById = async (req, res) => {
//   try {
//     const property = await Property.findById(req.params.id);
//     if (!property) {
//       return res.status(404).json({ message: 'Property not found' });
//     }
//     res.status(200).json(property);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a property by ID
// export const updateProperty = async (req, res) => {
//   try {
//     const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedProperty) {
//       return res.status(404).json({ message: 'Property not found' });
//     }
//     res.status(200).json(updatedProperty);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a property by ID
// export const deleteProperty = async (req, res) => {
//   try {
//     const deletedProperty = await Property.findByIdAndDelete(req.params.id);
//     if (!deletedProperty) {
//       return res.status(404).json({ message: 'Property not found' });
//     }
//     res.status(200).json({ message: 'Property deleted' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// controllers/propertyController.js
const { createProperty, getPropertyById } = require('../services/propertyService');

const createPropertyController = async (req, res) => {
  try {
    const propertyData = req.body;
    const property = await createProperty(propertyData);
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPropertyByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await getPropertyById(id);
    res.json(property);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createPropertyController,
  getPropertyByIdController,
};
