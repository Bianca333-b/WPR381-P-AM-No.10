// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home'); // Looks for 'views/home.ejs'
});

app.get('/about', (req, res) => {
  res.render('about'); // Looks for 'views/about.ejs'
});

app.get('/events', (req, res) => {
  res.render('events'); // Looks for 'views/events.ejs'
});

app.get('/contact', (req, res) => {
  res.render('contact'); // Looks for 'views/contact.ejs'
});

app.get('/thankyou', (req, res) => {
  res.render('thankyou'); // Looks for 'views/thankyou.ejs'
});

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
