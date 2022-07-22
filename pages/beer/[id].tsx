import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import RootContainer from '../../components/layout/RootContainer';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import BeerDetails from '../../features/BeerDetails';
import { observer } from 'mobx-react-lite';
import detailsStore from '../../stores/detailsStore';

const BeerPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    detailsStore.setBeer(id as string);
  }, [id]);

  return (
    <>
      <Head>
        <title>Beer: {detailsStore.beer?.name}</title>
      </Head>
      <RootContainer>
        <Header />
        <Main>
          <BeerDetails />
        </Main>
      </RootContainer>
    </>
  );
};

export default observer(BeerPage);
