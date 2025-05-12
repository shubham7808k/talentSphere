const express = require('express');
const User = require('../models/AdminModel').default || require('../models/AdminModel');
const Portfolio = require('../models/portfolioModel').default || require('../models/portfolioModel');
const router = express.Router();

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const filesUploaded = await Portfolio.countDocuments();
    const activePortfolios = await Portfolio.countDocuments({ isPublished: true });
    res.json({ totalUsers, filesUploaded, activePortfolios });
  } catch (error) {
    console.error('Stats error:', error); // Log the error for debugging
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
});

router.get('/users', async (req, res) => {
  try {
    // Get the latest 10 users, sorted by creation date (descending)
    const users = await User.find().sort({ createdAt: -1 }).limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

module.exports = router;