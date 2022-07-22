import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import shortenString from '../../../utils/shortenString';

interface CardProps {
  beer: {
    id: number;
    name: string;
    description: string;
    image_url: string;
  };
}

const Card: React.FC<CardProps> = ({ beer }) => {
  return (
    <section className={styles.container}>
      <Image alt='beer image' src={beer.image_url} width={50} height={200} />
      <div className={styles.info}>
        <h2 className={styles.name}>{beer.name}</h2>
        <p className={styles.description}>
          {shortenString(beer.description, 140)}
        </p>
      </div>
    </section>
  );
};

export default Card;
