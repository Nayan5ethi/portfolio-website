import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({ data }) => {
  const {
    name,
    position,
    url,
    startDate,
    endDate,
    summary,
    highlights,
  } = data;

  const formattedStartDate = dayjs(startDate).format('MMMM YYYY');
  const formattedEndDate = endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT';

  return (
    <article className="jobs-container">
      <header>
        <h4><a href={url}>{name}</a> - {position}</h4>
        <p className="daterange">{formattedStartDate} - {formattedEndDate}</p>
      </header>
      {summary && (
        <Markdown options={{ overrides: { p: { props: { className: 'summary' } } } }}>
          {summary}
        </Markdown>
      )}
      {highlights && (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
