const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  message: String,
  name: String,
  email: String,
  subject: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
