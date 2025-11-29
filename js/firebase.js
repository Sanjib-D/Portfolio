import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvcJ7iU8cqpxzTelK3-GgIS9aCela8G3U",
  authDomain: "sanjib-portfolio.firebaseapp.com",
  projectId: "sanjib-portfolio",
  storageBucket: "sanjib-portfolio.firebasestorage.app",
  messagingSenderId: "1036448013244",
  appId: "1:1036448013244:web:aec993949eb2ea5bea69b9",
  measurementId: "G-734PP7BY3W",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button");
    const originalText = btn.innerText;

    // 1. Check Cooldown BEFORE doing anything else
    const lastSubmit = localStorage.getItem("lastSubmit");
    const now = Date.now();

    if (lastSubmit && now - lastSubmit < 60000) {
      alert("Please wait a minute before sending another message.");
      return; // Stop here, don't disable button or change text
    }

    // 2. Start Sending Process
    btn.innerText = "Sending...";
    btn.disabled = true;

    try {
      // 3. Send to Firebase (with .trim() to clean inputs)
      await addDoc(collection(db, "messages"), {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
        timestamp: serverTimestamp(),
      });

      // 4. Success! Now set the cooldown and reset form
      localStorage.setItem("lastSubmit", now); 
      alert("Message Sent!");
      contactForm.reset();

    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    } finally {
      btn.innerText = "Send Message";
      btn.disabled = false;
    }
  });
}