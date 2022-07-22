import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const BeerDetails: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  return <div>{id}</div>;
};

export default BeerDetails;
