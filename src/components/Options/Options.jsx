import css from "./Options.module.css";

const Options = ({ setFeedback }) => {
  return (
    <div className={css.options}>
      <button onClick={setFeedback} className={css.btn}>
        Good
      </button>
      <button onClick={setFeedback} className={css.btn}>
        Neutral
      </button>
      <button onClick={setFeedback} className={css.btn}>
        Bad
      </button>
      <button onClick={setFeedback} className={css.btn}>
        Reset
      </button>
    </div>
  );
};
export default Options;
