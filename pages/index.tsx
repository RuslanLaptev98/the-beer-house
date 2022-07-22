import type { NextPage } from 'next';
import Head from 'next/head';
import RootContainer from '../components/layout/RootContainer';
import Header from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>the beer house</title>
      </Head>

      <RootContainer>
        <Header />
      </RootContainer>
    </>
  );
};

export default Home;
