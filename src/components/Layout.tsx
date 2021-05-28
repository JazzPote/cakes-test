import Layout from 'antd/lib/layout';
import styles from './Layout.module.scss';

const { Header, Footer, Content } = Layout;

const LayoutWrapper: React.FC = ({ children }) => (
  <>
    <Header className={styles.header}>Cakes App</Header>
    <Content className={styles.content}>{children}</Content>
    <Footer>Cakes App, coded by Guilhem Forey / @JackPoteYes</Footer>
  </>
);

export default LayoutWrapper;
