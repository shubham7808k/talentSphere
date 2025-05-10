const express = require('express');
const User = require('../models/AdminModel').default;
const Portfolio = require('../models/portfolioModel').default;
const router = express.Router();

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const filesUploaded = await Portfolio.countDocuments();
    const activePortfolios = await Portfolio.countDocuments({ isPublished: true });
    res.json({ totalUsers, filesUploaded, activePortfolios });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
});

module.exports = router;