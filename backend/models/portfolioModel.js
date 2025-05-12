import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  resumeFile: { type: String, required: true },
  portfolioData: { type: Object },
  isPublished: { type: Boolean, default: false },
  template: { type: String, default: 'default' },
  createdAt: { type: Date, default: Date.now },
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
