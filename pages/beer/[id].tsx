import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import RootContainer from '../../components/layout/RootContainer';
import Header from '../../components/layout/Header';
import Main from '../../components/layout/Main';
import BeerDetails from '../../features/BeerDetails';
import { Beer } from '../../types/Beer';
import axios from 'axios';

const BeerPage: NextPage = () => {
  const [beer, setBeer] = useState<Beer | null>(null);
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then((resp) => setBeer(resp.data[0]));
  }, [id]);

  return (
    <>
      <Head>
        <title>Beer {id}</title>
      </Head>
      <RootContainer>
        <Header />
        <Main>{beer && <BeerDetails beer={beer} />}</Main>
      </RootContainer>
    </>
  );
};

export default BeerPage;
