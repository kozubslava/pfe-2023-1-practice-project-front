import React from 'react';
import styles from './PriceCardHeader.module.sass'


const PriceCardHeader = ({name, description, price}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleHeader}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price}</p>
    </div>
);
}

export default PriceCardHeader 