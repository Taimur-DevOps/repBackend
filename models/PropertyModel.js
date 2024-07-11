import mongoose from 'mongoose';

const { Schema } = mongoose;

const propertySchema = new Schema({
  propertyId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    }
  ],
  propertyType: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  garage: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  yearBuilt: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  houseNo:{
    type: String,
    required: true,
  
  },
  blockNo:{
    type: String,
    required: true,

  },
  features: [
    {
      type: String,
    }
  ],
});

export default mongoose.model('Property', propertySchema);
