import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/mongo.js'; // Your MongoDB connection script
import saveBadgesRoute from './api/save-selected-badges.js';
import getBadgesRoute from './api/get-selected-badges.js';

// Load environment variables
dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
    origin: 'https://trustbadgesfrontend.vercel.app', // Your frontend URL
    credentials: true, // Allow cookies and headers like Authorization
  }));

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.post('/api/save-selected-badges', saveBadgesRoute);
app.post('/api/get-selected-badges', getBadgesRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
