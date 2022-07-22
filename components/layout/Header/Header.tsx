import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Image alt='beer image' src='/beer.svg' width={50} height={50} />
      <h1 className={styles.title}>the beer house</h1>
    </header>
  );
};

export default Header;
