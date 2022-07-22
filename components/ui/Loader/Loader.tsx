import React from 'react';
import styles from './Loader.module.scss';
import Image from 'next/image';

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src='/beer.svg' width={100} height={100} alt='beer image' />
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default Loader;
