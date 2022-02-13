import PropTypes from 'prop-types';
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <div>
        {options.map(el => (
          <button key={el} className="button-add" onClick={onLeaveFeedback}>
            {el}
          </button>
        ))}
      </div>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
