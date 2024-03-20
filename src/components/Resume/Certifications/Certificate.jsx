import PropTypes from 'prop-types';

const Certificate = ({ data: { link, organization, title }, last = false }) => (
  <>
    <li className="certificate-container">
      <a href={link}>
        <h4 className="certificate-organization">{organization}:</h4>
        <p className="certificate-name">{title}</p>
      </a>
    </li>
    {!last && (
      <li className="certificate-dot">
        <p className="certificate-name">&#8226;</p>
      </li>
    )}
  </>
);

Certificate.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

export default Certificate;
