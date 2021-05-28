import Image from 'next/image';
import { useRouter } from 'next/router';
import PageHeader from 'antd/lib/page-header';
import Rate from 'antd/lib/rate';
import styles from './CakeDetails.module.scss';
import QuoteComment from './QuoteComment';
import { CAKE_PLACEHOLDER_IMG_URL } from '../../../utils/constants';

interface CakeDetailsScreenProps {
  cake: Cake;
}

const CakeDetailsScreen = ({ cake }: CakeDetailsScreenProps) => {
  const router = useRouter();
  const handleBackButton = () => router.push('/');
  return (
    <>
      <PageHeader title={cake.name} onBack={handleBackButton} />
      <div className={styles.headingContainer}>
        <Image
          className={styles.cakeImage}
          src={cake.imgUrl || CAKE_PLACEHOLDER_IMG_URL}
          alt={`Image of cake "${cake.name}"`}
          width={125}
          height={125}
          objectFit="cover"
        />
        <div className={styles.titleRatingContainer}>
          <h1>{cake.name}</h1>
          <Rate disabled defaultValue={cake.yumFactor} />
        </div>
      </div>
      <h3>Comment</h3>
      <QuoteComment>{cake.comment}</QuoteComment>
    </>
  );
};

export default CakeDetailsScreen;
