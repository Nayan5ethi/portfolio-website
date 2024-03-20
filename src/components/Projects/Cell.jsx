import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data: { title, link, image, date, desc } }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={link}>{title}</a></h3>
        <time className="published">{dayjs(date).format('MMMM, YYYY')}</time>
      </header>
      <a href={link} className="image">
        <img src={`${image}`} alt={title} />
      </a>
      <div className="description">
        <p>{desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
