import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Nayan Sethi's personal website. Bennett University graduate. "
      + 'Software Developer. Worked at Climate Connect Digital and KainSkep.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            Explore my portfolio—a captivating display of expertise in web development. Discover a responsive, statically-generated React app crafted with modern JavaScript for seamless user experiences. From dynamic animations to intuitive interfaces, every detail reflects a passion for innovation. Let&apos;s connect!
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">some statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/Nayan5ethi/portfolio-website">here</a>.</p>
    </article>
  </Main>
);

export default Index;
