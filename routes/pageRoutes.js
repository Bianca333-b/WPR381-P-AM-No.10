// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const { teamMembers, events, contacts } = require('../data/data');

//Home
router.get('/', (req, res) => {
    res.render('pages/home',{events, cssFile:"homepage.css"});
});

// About
router.get('/about', (req, res) => {
  res.render('pages/about', { teamMembers, cssFile: "about.css" });
});

// Events
router.get('/events', (req, res) => {
  res.render('pages/events', { events, cssFile: "events.css" });
});

// Contact (GET)
router.get('/contact', (req, res) => {
res.render('pages/contact', {
    errors: [],
    formData: { name: '', email: '', message: ''}, cssFile: "contact.css" 
  });
});

// Contact (POST)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
   // Basic validation

if (!name || name.trim().length < 2) {
    errors.push("Name is required and must be at least 2 characters.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("A valid email address is required.");
  }

  if (!message || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

if (errors.length > 0) {
    return res.status(400).render('pages/contact', {
      errors,
      formData: { name, email, message }, cssFile: "contact.css"
    });
  }

   contacts.push({ name, email, message });
  res.redirect('/thankyou');
});

// Thank You
router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', { cssFile: "thankyou.css" });
});

module.exports = router;


// Sample team member data

