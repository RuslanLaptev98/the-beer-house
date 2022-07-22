import React from 'react';
import styles from './RootContainer.module.scss';

interface RootContainerProps {
  children: React.ReactNode;
}

const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>{children}</section>
    </div>
  );
};

export default RootContainer;
