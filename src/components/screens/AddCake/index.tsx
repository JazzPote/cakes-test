import { PageHeader } from 'antd';
import { useRouter } from 'next/dist/client/router';
import AddCakeForm from './AddCakeForm';

const AddCakeScreen = () => {
  const router = useRouter();
  const handleBackButton = () => router.push('/');

  return (
    <>
      <PageHeader title="Add a cake" onBack={handleBackButton} />
      <AddCakeForm />
    </>
  );
};

export default AddCakeScreen;
