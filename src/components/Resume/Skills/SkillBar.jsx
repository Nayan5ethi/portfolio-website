import PropTypes from 'prop-types';

const SkillBar = ({ data: { category, competency, title }, categories }) => {
  const titleStyle = {
    background: categories?.length ? categories.find(cat => category.includes(cat.name))?.color : '',
  };

  const barWidth = `${Math.min(100, Math.max((competency / 5.0) * 100.0, 0))}%`;
  const barStyle = { ...titleStyle, width: barWidth };

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}><span>{title}</span></div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;