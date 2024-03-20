import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me.jpg" alt="" />
      </Link>
      <header>
        <h2>Nayan Sethi</h2>
        <p><a href="mailto:nayansethi30@gmail.com">nayansethi30@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Nayan, a Software developer who graduated from <a href="https://www.bennett.edu.in/">Bennett University</a>. I am actively looking for a job where I can innovate and create meaningful solutions.
        Previously, I worked at <a href="https://climateconnect.digital/">Climate Connect Digital</a>, and <a href="https://planet.com">KainSkep</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Nayan Sethi <Link to="/">nayansethi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
