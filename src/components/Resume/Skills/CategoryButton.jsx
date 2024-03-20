import PropTypes from 'prop-types';

const CategoryButton = ({ handleClick, active, label }) => {
  const isActive = active[label];

  const buttonClasses = `skillbutton ${isActive ? 'skillbutton-active' : ''}`;

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={() => handleClick(label)}
    >
      {label}
    </button>
  );
};

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

export default CategoryButton;
