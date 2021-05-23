import Link from 'next/link';
import { Col, Row, PageHeader, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CakeCard from './CakeCard';

interface CakesScreenProps {
  cakes: Cake[];
}

const CakesListScreen = ({ cakes }: CakesScreenProps) => (
  <>
    <PageHeader
      title="Cakes list"
      subTitle="Very good cakes"
      extra={[
        <Link href="/add-a-cake">
          <Button key="addCakeButton" type="primary" icon={<PlusOutlined />}>
            Add Cake
          </Button>
        </Link>,
      ]}
    />
    <Row gutter={[8, 8]}>
      {cakes.map((cake) => (
        <Col xs={24} sm={12} lg={8} xl={6} key={cake.id}>
          <CakeCard {...cake} />
        </Col>
      ))}
    </Row>
  </>
);

export default CakesListScreen;
