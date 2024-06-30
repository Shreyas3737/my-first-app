// pages/_app.tsx
import { AppProps } from 'next/app';
import { fetchBoards } from '../utils/api';
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [bcfBoards, setBcfBoards] = useState([]);

  useEffect(() => {
    const getBoards = async () => {
      const data = await fetchBoards();
      setBcfBoards(data);
    };
    getBoards();
  }, []);

  return <Component {...pageProps} bcfBoards={bcfBoards} />;
};

export default MyApp;
