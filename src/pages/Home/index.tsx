
import Header from '../../components/Header';
import { ServerList } from '../../components/ServerList';
import { Summary } from '../../components/Summary';

function Home() {
  return (
    <>
      <Header />
      <Summary />
      <ServerList/>
    </>
  );
}

export default Home;