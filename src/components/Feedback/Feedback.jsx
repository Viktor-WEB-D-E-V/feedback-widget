import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.feedback}>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad: {bad}</p>
      <p className={css.item}>Total: {total}</p>
      <p className={css.item}>Positive: {positive}%</p>
    </div>
  );
};
export default Feedback;
