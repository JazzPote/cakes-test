import Image from 'next/image';
import { Card, Rate } from 'antd';
import styles from './CakeCard.module.scss';
import { CAKE_PLACEHOLDER_IMG_URL } from '../../../constants';

const CakeCard = (props: Cake) => (
  <Card
    hoverable
    className={styles.card}
    cover={
      <div className={styles.cardCover}>
        <Image
          alt={`Picture of cake "${props.name}"`}
          src={props.imgUrl || CAKE_PLACEHOLDER_IMG_URL}
          layout="fill"
          objectFit="cover"
        />
      </div>
    }
  >
    <Card.Meta title={props.name} description={props.comment}></Card.Meta>
    <Rate disabled defaultValue={props.yumFactor} />
  </Card>
);

export default CakeCard;
