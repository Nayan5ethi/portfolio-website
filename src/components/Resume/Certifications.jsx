import PropTypes from 'prop-types';
import Certificate from './Certifications/Certificate';

const getRows = (certifications) => (
  certifications.map((certificate, idx) => (
    <Certificate
      key={certificate.title}
      data={certificate}
      last={idx === certifications.length - 1}
    />
  ))
);

const Certifications = ({ data }) => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    <ul className="certificate-list">
      {getRows(data)}
    </ul>
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Certifications;
