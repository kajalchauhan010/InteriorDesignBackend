const Contact = require("../models/contact");

exports.submitContactForm = async (req, res) => {
  try {
    const { message, name, email, subject } = req.body;

    if (!message || !name || !email || !subject) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    await Contact.create({ message, name, email, subject });

    res.status(200).json({ success: true, message: "Contact form submitted successfully." });
  } catch (error) {
    console.error("Error submitting contact form:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
