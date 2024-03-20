import Table from './Table';
import data from '../../data/stats/setup';

const SetupStats = () => (
  <>
    <h3>Some stats about my setup</h3>
    <Table data={data} />
  </>
);

export default SetupStats;
