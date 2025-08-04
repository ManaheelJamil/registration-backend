const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// ✅ Step 1: Define allowed origins
const allowedOrigins = [
  'http://localhost:5000',
  'https://registration-frontend-rose.vercel.app'
];

// ✅ Step 2: Use cors middleware with those origins
app.use(cors({
  origin: allowedOrigins
}));

// ✅ Step 3: Middleware for JSON body parsing
app.use(express.json());

// ✅ Step 4: Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/registration')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ✅ Step 5: Register your routes
app.use('/api', authRoutes);

// ✅ Step 6: Start your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
