import { useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (type) => {
    
    setReviews((prevReviews) => ({
      ...prevReviews,
      [type]: prevReviews[type] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options setFeedback={updateFeedback} />
      <Feedback
        good={reviews.good}
        neutral={reviews.neutral}
        bad={reviews.bad}
      />
    </>
  );
}

export default App;
