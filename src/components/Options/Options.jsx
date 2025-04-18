import css from "./Options.module.css";

const Options = ({ setFeedback, resetFeedback, total }) => {
  return (
    <div className={css.options}>
      <button
        onClick={() => {
          setFeedback("good");
        }}
        className={css.btn}
      >
        Good
      </button>
      <button
        onClick={() => {
          setFeedback("neutral");
        }}
        className={css.btn}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setFeedback("bad");
        }}
        className={css.btn}
      >
        Bad
      </button>

      {total > 0 && (
        <button onClick={resetFeedback} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
