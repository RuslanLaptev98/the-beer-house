import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import shortenString from '../../../utils/shortenString';
import { Beer } from '../../../types/Beer';

interface CardProps {
  beer: Beer;
}

const Card: React.FC<CardProps> = ({ beer }) => {
  return (
    <section className={styles.container}>
      <Image
        alt='beer image'
        src={beer.image_url ? beer.image_url : '/beer.svg'}
        width={50}
        height={200}
        objectFit='contain'
      />
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
