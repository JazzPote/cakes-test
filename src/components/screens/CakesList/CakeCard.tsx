import Image from 'next/image';
import { Card, Rate } from 'antd';
import styles from './CakeCard.module.scss';
import { CAKE_PLACEHOLDER_IMG_URL } from '../../../utils/constants';
import Link from 'next/link';

const CakeCard = (props: Cake) => (
  <Link href={`/cake/${props.name}`}>
    <Card
      hoverable
      className={styles.card}
      cover={
        <div className={styles.cardCover}>
          <Image
            alt={`Picture of cake "${props.name}"`}
            src={props.imgUrl || CAKE_PLACEHOLDER_IMG_URL}
            width={400}
            height={200}
            objectFit="cover"
          />
        </div>
      }
    >
      <Card.Meta title={props.name}></Card.Meta>
      <Rate disabled defaultValue={props.yumFactor} />
    </Card>
  </Link>
);

export default CakeCard;
