import 'antd/dist/antd.css';
import '../sass/app.scss';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head';
import Meta from '../components/Meta';

export default function app({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Cakes app</title>
        <Meta />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
