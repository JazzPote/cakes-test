import db from '../db';
import CakesListScreen from '../components/screens/CakesList';

interface HomePageProps {
  cakes: Cake[];
}

function HomePage({ cakes }: HomePageProps) {
  return <CakesListScreen cakes={cakes} />;
}

export default HomePage;

export function getServerSideProps() {
  return {
    props: {
      cakes: db,
    },
  };
}
