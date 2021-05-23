import { Col, Row } from 'antd';
import CakeCard from './CakeCard';

interface CakesScreenProps {
  cakes: Cake[];
}

const CakesListScreen = ({ cakes }: CakesScreenProps) => (
  <Row gutter={[8, 8]}>
    {cakes.map((cake) => (
      <Col xs={24} sm={12} lg={8} xl={6} key={cake.id}>
        <CakeCard {...cake} />
      </Col>
    ))}
  </Row>
);

export default CakesListScreen;
