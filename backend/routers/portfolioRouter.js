const express = require('express');
const Portfolio = require('../models/portfolioModel').default; // For ES module default export
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

// Save a new portfolio (protected route)
router.post('/save-portfolio', verifyToken, async (req, res) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const { resumeFile, portfolioData, isPublished, template } = req.body;
  const userId = req.user.id || req.user.userId || req.user._id; // adjust according to your JWT payload

  try {
    const newPortfolio = new Portfolio({
      userId,
      resumeFile,
      portfolioData,
      template,
      isPublished,
    });

    const savedPortfolio = await newPortfolio.save();
    res.status(201).json(savedPortfolio);
  } catch (error) {
    console.error('Error saving portfolio:', error);
    res.status(500).json({ message: 'Failed to save portfolio' });
  }
});

// Get all saved portfolios
router.get('/get-portfolios', async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    res.status(500).json({ message: 'Failed to fetch portfolios' });
  }
});

// Get portfolios for a specific user (protected route)
router.get('/user-portfolios', verifyToken, async (req, res) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const userId = req.user.id || req.user.userId || req.user._id;
  try {
    const portfolios = await Portfolio.find({ userId });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch portfolios' });
  }
});

// Get a portfolio by ID
router.get('/portfolio/:id', async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.status(200).json(portfolio);
  } catch (error) {
    console.error('Error fetching portfolio by id:', error);
    res.status(500).json({ message: 'Failed to fetch portfolio' });
  }
});

// Update a portfolio
router.put('/update-portfolio/:id', async (req, res) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const { websiteCode, isPublished } = req.body;

  try {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { websiteCode, isPublished },
      { new: true }
    );

    if (!updatedPortfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.status(200).json(updatedPortfolio);
  } catch (error) {
    console.error('Error updating portfolio:', error);
    res.status(500).json({ message: 'Failed to update portfolio' });
  }
});

module.exports = router;
