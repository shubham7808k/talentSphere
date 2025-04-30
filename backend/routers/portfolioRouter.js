const express = require('express');
const Portfolio = require('../models/portfolioModel'); // Ensure this model file exists

const router = express.Router();

// Save a new portfolio
router.post('/save-portfolio', async (req, res) => {
  const { name, email, phone, skills, education, experience } = req.body;

  try {
    const newPortfolio = new Portfolio({
      name,
      email,
      phone,
      skills,
      education,
      experience,
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

module.exports = router;
