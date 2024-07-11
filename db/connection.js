// Importing mongoose with ES Module syntax
import mongoose from "mongoose";

// Connecting to MongoDB
const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/propertyDB")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// If you need to export the connection (for instance, to use it elsewhere), use export
export default dbConnection;
  