
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create Nodemailer transporter with more specific configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // Using port 587 with STARTTLS instead of 465 with SSL
  secure: false, // true for 465, false for other ports like 587
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD // This should be an app password, not your regular password
  },
  tls: {
    rejectUnauthorized: true // Validate TLS/SSL certificates
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email and message are required'
    });
  }

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_ADDRESS}>`, // Use your email as sender with name in quotes
    to: process.env.EMAIL_ADDRESS,
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Sender's Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});