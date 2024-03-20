import PropTypes from 'prop-types';
import Job from './Experience/Job';

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        key={`${job.name}-${job.position}`}
        data={job}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  })).isRequired,
};

export default Experience;
