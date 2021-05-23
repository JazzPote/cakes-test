import 'antd/dist/antd.css';
import { AppProps } from 'next/app';

export default function app({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
