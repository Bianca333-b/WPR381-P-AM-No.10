// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const { teamMembers, events, contacts } = require('../data/data');

//Home
router.get('/', (req, res) => {
    res.render('pages/home',{events});
});

// About
router.get('/about', (req, res) => {
  res.render('pages/about', { teamMembers });
});

// Events
router.get('/events', (req, res) => {
  res.render('pages/events', { events });
});

// Contact (GET)
router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

// Contact (POST)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  contacts.push({ name, email, message });
  res.redirect('/thankyou');
});

// Thank You
router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');
});

module.exports = router;
