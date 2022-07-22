import React from 'react';
import Link from 'next/link';
import styles from './BackButton.module.scss';

const BackButton: React.FC = () => {
  return (
    <Link href={'/'}>
      <a className={styles.container}>{'< Back'}</a>
    </Link>
  );
};

export default BackButton;
