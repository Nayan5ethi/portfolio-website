import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <h3>References</h3>

    </div>
    <Link to="/contact">
      <p>References are available upon request</p>
    </Link>
  </div>
);

export default References;
