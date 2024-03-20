import PropTypes from 'prop-types';
import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map(({ school, degree, link, year }) => (
      <Degree
        key={school}
        data={{ school, degree, link, year }}
      />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    link: PropTypes.string,
    year: PropTypes.number,
  })).isRequired,
};

export default Education;
