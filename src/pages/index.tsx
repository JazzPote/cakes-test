import * as DAO from '../dao';
import CakesListScreen from '../components/screens/CakesList';

interface HomePageProps {
  cakes: Cake[];
}

function HomePage({ cakes }: HomePageProps) {
  return <CakesListScreen cakes={cakes} />;
}

export default HomePage;

export function getServerSideProps() {
  const cakes = DAO.getAllCakes();
  return {
    props: {
      cakes,
    },
  };
}
