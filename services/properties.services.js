// services/propertyService.js
import Property from '../models/propertyModel';

const createProperty = async (propertyData) => {
  try {
    const property = new Property(propertyData);
    await property.save();
    return property;
  } catch (error) {
    throw new Error('Error creating property: ' + error.message);
  }
};

const getPropertyById = async (propertyId) => {
  try {
    const property = await Property.findById(propertyId);
    if (!property) {
      throw new Error('Property not found');
    }
    return property;
  } catch (error) {
    throw new Error('Error fetching property: ' + error.message);
  }
};

module.exports = {
  createProperty,
  getPropertyById,
};
