import css from "./Options.module.css";

const Options = ({ setFeedback }) => {
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
      <button className={css.btn}>Reset</button>
    </div>
  );
};
export default Options;
