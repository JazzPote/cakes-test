import 'antd/dist/antd.css';
import '../sass/app.scss';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function app({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Cakes app</title>
        <meta
          name="description"
          content="This ultimate cake list contains all of my favourite cakes, rated from 1 to 5. Feel free to add yours to the list."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
