import React from 'react';
import styles from './RootContainer.module.scss';

interface RootContainerProps {
  children: React.ReactNode;
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default RootContainer;
