import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import RootContainer from '../components/layout/RootContainer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>the beer house</title>
      </Head>

      <RootContainer>
        <Image alt='beer image' src='/beer.svg' width={100} height={100} />
        <h1>the beer house</h1>
      </RootContainer>
    </>
  );
};

export default Home;
