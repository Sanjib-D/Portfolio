# 👨‍💻 Sanjib Das - Developer Portfolio

A modern, responsive, and performance-focused personal portfolio website. Built with vanilla JavaScript, HTML5, and CSS3, featuring a real-time contact form powered by Firebase.

**Live Demo:** [Click Here](sanjib-d.github.io/Portfolio/)

## ✨ Features

* **⚡ Fast & Lightweight:** Zero external framework dependencies (React/Vue/Angular) for maximum performance.
* **🎨 Dark/Light Mode:** Persists user preference using LocalStorage.
* **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop.
* **🔥 Real-time Contact Form:** Connects to Firebase Firestore with spam protection (1-minute cooldown).
* **📂 Dynamic Projects:** Projects are loaded from a JSON file (`projects.json`) for easy updates without touching HTML.
* **✨ Animations:** Typewriter effect and scroll-reveal animations using Intersection Observer.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Variables & Flexbox/Grid), JavaScript (ES6 Modules).
* **Backend (Serverless):** Firebase Firestore (NoSQL Database).
* **Hosting:** GitHub Pages

## 📂 Project Structure

```text
/
├── index.html          # Home Page
├── projects.html       # Projects Gallery
├── about.html          # About Me
├── contact.html        # Contact Form
├── css/
│   └── style.css       # Main Stylesheet (Variables, Dark Mode, Layout)
├── js/
│   ├── main.js         # UI Logic (Typewriter, Scroll Animations)
│   ├── projects.js     # Fetches and renders projects from JSON
│   ├── theme.js        # Dark/Light mode toggle logic
│   └── firebase.js     # Firebase connection & Form handling
├── data/
│   └── projects.json   # Data source for your projects
└── assets/
    └── images/         # Project screenshots and icons
```
---

## 🛡️ Spam Protection
The contact form includes a client-side cooldown feature in `js/firebase.js`:
* Users can only send **1 message every 60 seconds**.
* This prevents accidental double-clicks and basic bot spam.

## 👤 Author
**Sanjib Dev**
* GitHub: [@Sanjib-D](https://github.com/Sanjib-D)
* Location: Assam, India
