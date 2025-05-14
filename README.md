# Community Portal Project

## Overview

This project was created for the **WPR381** module and is a fully functional community portal website.  It has a responsive, dynamic rendering, modular routing, a contact form, and is constructed with **Node.js**, **Express.js**, and **EJS**.

 Home, About, Events, Contact, and Thank You are the portal's five primary pages.  The server handles contact submissions and event data.

---
## Instructions
1. Clone the repository to your local machine.
2. Install project dependencies:
```bash
   npm install 
```
3. Start server using:
```bash
    npm run start
```
4. Open your browser and visit:
```
    http://localhost:3000
```
---

## Technologies

- Node.js (v18+)
- Express.js (v4+)
- EJS (v3+)
- CSS & Bootstrap 5
- Git & GitHub
- Nodemon for development


---

## Features
- ✅ Organized folder structure for maintainability
- ✅ Dynamic EJS rendering with partials (`header.ejs`, `footer.ejs`)
- ✅ Express routing via `pageRoutes.js`
- ✅ Contact form with server-side processing
- ✅ Dynamic event listing 
- ✅ Nodemon for live server reload during development

---

## Folder Structure

```
├── settings.json
├── data/
│   └── data.js
├── node_modules
├── public/
│   ├── css/about.css, contact.css, event.css, footer.css, header.css
│   └── images/ 
├── routes/
│   └── pageRoutes.js
├── views/
│   ├── pages/about.ejs, contact.ejs, events.ejs, home.ejs, thankyou.ejs
│   └── partials/header.ejs, footer.ejs
├── app.js 
├── README.md 
├── .gitinore 
├── .gitattributes
├── package-lock.json 
└── package.json  
```

---

## Pages

|Path|Description|
|---|---|
|`/`|Home page with hero banner and preview of 3 upcoming events|
|`/about`|Page describing the team and purpose of the portal|
|`/events`|Dynamically rendered list of all events|
|`/contact`|Contact form with validation and server-side handling|
|`/thankyou`|Redirect page shown after successful contact form submission|

---

## Contact Form Implementation

- Form fields: `name`, `email`, `message`
- Contact data is stored in `data/data.js`
- Submissions are handled via a `POST` request to `/contact`


---

## GitHub Collaboration

Only necessary files are included in the repository and final `.zip` submission; `.gitignore` contains `node_modules/` and other unnecessary files; Git commits are recorded and reflect team progress.

---

## Team Members

|Name|Student Number|Role|
|---|---|---|
|Bianca Grobler|600537|Team Lead|
|Tiaan Kemp|601223|Backend Developer|
|Yanga Mazibuko|600549|Frontend Developer|
|Vunene Khoza|600676|Data Manager|

---

## Submission Notes
The final submission in `.zip` does not include `node_modules/`
The project satisfies all assignment requirements in terms of structure, navigation, and functionality; all functional pages are present and operational.
The peer review was sent in a `.zip` file.