import { Layout } from 'antd';
import styles from './Layout.module.scss';

const LayoutWrapper: React.FC = ({ children }) => (
  <Layout>
    <Layout.Header className={styles.header}>Cakes App</Layout.Header>
    <Layout.Content className={styles.content}>{children}</Layout.Content>
    <Layout.Footer>Cakes App, coded by Guilhem Forey / @JackPoteYes</Layout.Footer>
  </Layout>
);

export default LayoutWrapper;
