import React from 'react';
import styles from './PriceCardHeader.module.sass'


const PriceCardHeader = ({name, color, description, price}) => {
  return (
    <div className={styles.container} style={{borderColor:`${color}`}}>
      <h2 className={styles.titleHeader} style={{color:`${color}`}}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price} style={{color:`${color}`}}>{price}</p>
    </div>
);
}

export default PriceCardHeader 