import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  skills: [{ type: String }],
  education: [{ type: String }],
  experience: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
