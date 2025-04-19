import { useState, useEffect } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("saved-reviews");

    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    const revStringify = JSON.stringify(reviews);
    window.localStorage.setItem("saved-reviews", revStringify);
  }, [reviews]);

  const totalFeedback = reviews.bad + reviews.good + reviews.neutral;

  const countPositiveFeedback =
    totalFeedback > 0
      ? Math.round((reviews.good / totalFeedback) * 100)
      : 0;

  const updateFeedback = (type) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [type]: prevReviews[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0});
  };
  return (
    <>
      <Description />
      <Options
        total={totalFeedback}
        setFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback <= 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          positive={countPositiveFeedback}
          total={totalFeedback}
        />
      )}
    </>
  );
}

export default App;
