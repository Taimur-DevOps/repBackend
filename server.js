import express from "express";
import dotenv from "dotenv";
import cors  from "cors";
import './db/connection.js';  // Ensures DB is connected before starting the server
// const cors = require('cors');

dotenv.config();  // Initialize dotenv to load environment variables


// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());
// Importing routes
import UserRoutes from './routes/UserRoutes.js';
import PropertyRoutes from './routes/PropertyRoutes.js'
// Routes setup
app.get("/", (req, res) => {
    res.json("Hello World!");
});
app.use(UserRoutes)
app.use(PropertyRoutes)
// Set port from environment with a default value
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
