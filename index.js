import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/mongo.js'; // Your MongoDB connection script
import saveBadgesRoute from './api/save-selected-badges.js';
import getBadgesRoute from './api/get-selected-badges.js';
import cors from 'cors'; // Import the CORS package
// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
// API Routes
app.use('/api/save-selected-badges', saveBadgesRoute);
app.use('/api/get-selected-badges', getBadgesRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
