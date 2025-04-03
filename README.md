# Feedback App

## Overview
This is a simple React-based feedback collection application that allows users to rate a service as **Good, Neutral, or Bad**. The app dynamically updates and stores user feedback in local storage for persistence.

## Features
- Allows users to provide feedback by selecting **Good, Neutral, or Bad**.
- Displays the total feedback count and percentage of positive feedback.
- Automatically saves feedback data in **local storage**.
- Provides a **reset button** to clear all feedback.
- Displays a message when no feedback has been given yet.

## Technologies Used
- React.js (with Hooks: `useState`, `useEffect`)
- LocalStorage for data persistence

## Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/Viktor-WEB-D-E-V/feedback-widget.git
   cd feedback-widget
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173/` (or the specified port) in your browser.

## Project Structure
```
src/
 ├── components/
 │   ├── Description/      # App introduction component
 │   ├── Feedback/         # Displays feedback statistics
 │   ├── Notification/     # Message when no feedback is given
 │   ├── Options/          # Buttons for feedback input
 ├── App.jsx               # Main application logic
 ├── main.jsx              # App entry point
 ├── index.css             # Global styles
```

## How It Works
1. The user clicks a feedback button (**Good, Neutral, Bad**).
2. The state updates, and the total feedback count increases.
3. The updated feedback is stored in **local storage**.
4. Feedback statistics (total count, percentage) are displayed dynamically.
5. The user can reset all feedback data by clicking the **Reset** button.

