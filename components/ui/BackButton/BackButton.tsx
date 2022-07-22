import React from 'react';
import Link from 'next/link';
import styles from './BackButton.module.scss';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Link href={'/'}>
      <a className={styles.container} onClick={onClick}>
        {'< Back'}
      </a>
    </Link>
  );
};

export default BackButton;
