import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import Setup from '../components/Stats/Setup';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Nayan Sethi and nayansethi.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <Setup />
    </article>
  </Main>
);

export default Stats;
