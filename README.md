# **Quiz App**

A simple and interactive quiz application built with **HTML, CSS and JavaScript**.
It displays multiple-choice questions, evaluates answers, tracks scores, and provides feedback at the end.
Ideal for practising DOM manipulation, arrays, objects, and event handling.

---

## **Features**

* Dynamic question and option rendering
* Score tracking
* Correct and incorrect answer feedback
* Automatic progression to the next question
* Final summary with performance feedback
* Clean separation of logic (HTML, CSS, JS)

---

## **Preview**

You can run the app locally by opening `index.html` in a browser.

---

## **Project Structure**

```
├── index.html          # Main UI
├── style.css           # Basic styling
├── script.js           # Quiz logic
├── questions.js        # Question bank
├── TODO.md           # Feature ideas and upgrades
├── .gitignore
└── .github/workflows   # Optional CI configuration
```

---

## **How It Works**

The quiz loads one question at a time from `questions.js`.
Users select an option, click **Next**, and the app:

1. Checks the selected answer
2. Updates the score
3. Moves to the next question or ends the quiz
4. Displays final score and feedback

---

## **Known Issues / Improvements Needed**

* Options container is not cleared correctly
* `nextBtn.disable` → should be `nextBtn.disabled = true`
* Duplicate question rendering logic
* No progress bar
* No responsiveness handling

---

## **Planned Features**

### **Quiz Mechanics**

* Randomise questions and options
* Select any **10 random questions** per attempt
* Timer per question
* Score percentage calculation
* Explanation for each answer

### **User Experience**

* Save high scores using Local Storage
* Restart button
* Category selection (HTML / CSS / JS)
* Progress bar
* Dark mode toggle
* Sound effects

### **UI Enhancements**

* Fully responsive layout
* Improved button design
* Cleaner animations

### **Extra Features**

* Leaderboard (local or future backend)
* Shareable score link

---

## **Technologies Used**

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla)**

---

## **Purpose of This Project**

This project was created to practise:

* DOM manipulation
* Event listeners
* Handling arrays and objects
* Modular file structure
* Basic UI/UX in web apps

---
