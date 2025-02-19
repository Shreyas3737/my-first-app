import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../app/globals.css'; 

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
