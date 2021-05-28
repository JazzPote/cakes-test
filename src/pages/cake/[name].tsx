import * as DAO from '../../dao';
import CakeDetailsScreen from '../../components/screens/CakeDetails';
import { GetServerSidePropsContext } from 'next';

interface CakeDetailsPageProps {
  cake: Cake;
}

const CakeDetailsPage = ({ cake }: CakeDetailsPageProps) => {
  return <CakeDetailsScreen cake={cake} />;
};

export default CakeDetailsPage;

export function getServerSideProps(context: GetServerSidePropsContext<{ name: string }>) {
  const notFoundPayload = {
    notFound: true,
  };
  const cakeName = context.params?.name;
  if (!cakeName) {
    return notFoundPayload;
  }
  const cake = DAO.getCakeByName(cakeName);
  if (!cake) {
    return notFoundPayload;
  }

  return {
    props: {
      cake,
    },
  };
}
