import React from 'react';
import { Beer } from '../../types/Beer';
import styles from './BeerDetails.module.scss';
import Image from 'next/image';
import BackButton from '../../components/ui/BackButton';

interface BeerDetailsProps {
  beer: Beer;
}

const BeerDetails: React.FC<BeerDetailsProps> = ({ beer }) => {
  return (
    <section className={styles.container}>
      <BackButton />

      <section className={styles.content}>
        <article className={styles.info}>
          <h2 className={styles.name}>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>abv: {beer.abv}</p>
          <p>{beer.description}</p>

          <div>
            <p>Great food pairings would be: </p>
            <ul>
              {beer.food_pairing.map((fp) => (
                <li key={fp}>{fp}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className={styles.imageContainer}>
          <Image
            alt='beer image'
            src={beer.image_url ? beer.image_url : '/beer.svg'}
            width={100}
            height={400}
          />
        </div>
      </section>
    </section>
  );
};

export default BeerDetails;
