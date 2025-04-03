import { useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = reviews.bad + reviews.good + reviews.neutral;

  const countPositiveFeedback =
    reviews.totalFeedback > 0
      ? Math.round((reviews.good / totalFeedback) * 100)
      : 0;

  const updateFeedback = (type) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [type]: prevReviews[type] + 1,
      totalFeedback: prevReviews.totalFeedback + 1,
    }));
  };

  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0, totalFeedback: 0 });
  };
  return (
    <>
      <Description />
      <Options
        total={reviews.totalFeedback}
        setFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />

      {reviews.totalFeedback <= 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          positive={countPositiveFeedback}
          total={reviews.totalFeedback}
        />
      )}
    </>
  );
}

export default App;
