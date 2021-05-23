import 'antd/dist/antd.css';
import '../sass/app.scss';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

export default function app({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
