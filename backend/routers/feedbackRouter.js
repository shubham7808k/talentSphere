const express = require('express');
const Feedback = require('../models/FeedbackModel').default;
const router = express.Router();

// User submits feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, rating, message } = req.body;
    await Feedback.create({ name, email, rating, message });
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit feedback' });
  }
});

// Admin fetches all feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch feedbacks' });
  }
});

module.exports = router;