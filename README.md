# 🌐 Dynamic Community Portal Website

A Node.js-powered community portal built with Express.js and EJS, designed to display information about events, contact forms, and team members in a clean and dynamic format.

## 🚀 Technologies Used

- Node.js v18+
- Express.js v4+
- EJS v3+
- CSS / Bootstrap 5 (optional)
- Git & GitHub
- Nodemon

## 👥 Team Members & Roles

### 👤 **Bianca Grobler** – Team Lead

- Set up the initial GitHub repository and defined a branching strategy for collaborative development.
- Ensured that all teammates' contributions integrated cleanly into the `app.js` structure.
- Coordinated and tested the final application to ensure submission readiness and functional consistency across pages.
- Took responsibility for writing and organizing the final `README.md` and guiding overall team workflow.

### 👤 **Tiaan Kemp** – Backend Developer

- Created and structured the backend data module (`data/data.js`) to store team member info, event details, and contact submissions.
- Developed all routes in `routes/pageRoutes.js` for both GET and POST requests.
- Implemented dynamic data rendering for About and Events pages using EJS.
- Handled contact form validation, in-memory storage, and error handling.
- Configured and cleaned up the Express server setup (`app.js`) to ensure modularity and best practices.

### 👤 **Yanga Mazibuko** – Frontend Developer

- Created the EJS templates for all five pages: Home, About, Events, Contact, and Thank You.
- Integrated EJS partials (`header.ejs`, `footer.ejs`) for reusable layout components.
- Styled the application using CSS and ensured a consistent, responsive design across pages.
- Worked closely with the backend to connect dynamic data with clean visual layouts.  

### 👤 **Vunene Khoza** – Data/Documentation Manager

- Collected, cleaned, and prepared structured data for the team (events, team members, etc.).
- Assisted in managing the `/public/images` and `style.css` files.
- Helped verify correct dynamic rendering of data inside EJS templates.
- Ensured that the documentation, inline comments, and file structure were clear, consistent, and submission-ready.

## 📁 Project Folder Structure

community-portal/
├── /public
│   ├── /css/style.css
│   ├── /images/art.jpg, tech.jpg, music.jpg
├── routes/
│ └── pageRoutes.js
├── views/
│ ├── partials/head.ejs, footer.ejs
| └── pages/home.ejs, about.ejs, events.ejs, contact.ejs, thankyou.ejs
├── data/
│ └── data.js
├── app.js
├── package.json
├── .gitignore
└── README.md

## 🛠 Setup Instructions

## Clone the repo

```bash
git clone https://github.com/yourusername/community-portal.git
cd community-portal

## Install Dependenies
npm install

## Start in Development Mode
npm run dev

## Open in browser:
http://localhost:3000

## Features
Dynamic page rendering with EJS

In-memory contact form submissions

Events and team data rendered from arrays

Modular routing and middleware configuration

Clean Git history and collaborative branching
