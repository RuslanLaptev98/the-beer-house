import React from 'react';
import styles from './BeerDetails.module.scss';
import Image from 'next/image';
import BackButton from '../../components/ui/BackButton';
import { observer } from 'mobx-react-lite';
import detailsStore from '../../stores/detailsStore';
import Loader from '../../components/ui/Loader';

const BeerDetails: React.FC = () => {
  const { beer, clearBeer } = detailsStore;

  const clickHandler = () => {
    clearBeer();
  };

  if (beer) {
    return (
      <section className={styles.container}>
        <BackButton onClick={clickHandler} />

        <section className={styles.content}>
          <article className={styles.info}>
            <h2 className={styles.name}>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>abv: {beer.abv}</p>
            <p>{beer.description}</p>

            <div>
              <p>Great food pairings would be: </p>
              <ul>
                {beer.food_pairing.map((pairing) => (
                  <li key={pairing}>{pairing}</li>
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
  } else {
    return <Loader />;
  }
};

export default observer(BeerDetails);
