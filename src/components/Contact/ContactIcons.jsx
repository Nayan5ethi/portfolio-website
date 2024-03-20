import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact';

const ContactIcons = ({ className }) => {
  if (!Array.isArray(data)) {
    console.error('Invalid data format: Expected an array.');
    return null;
  }

  return (
    <ul className={`icons ${className}`}>
      {data.map((item, index) => (
        <li key={`${item.label}-${index}`}>
          <a href={item.link} aria-label={item.label}>
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

ContactIcons.propTypes = {
  className: PropTypes.string,
};

ContactIcons.defaultProps = {
  className: '',
};

export default ContactIcons;
