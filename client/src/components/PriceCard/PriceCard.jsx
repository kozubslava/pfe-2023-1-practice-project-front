import React from 'react';
import PriceCardHeader from '../PriceCardHeader/PriceCardHeader';
import PriceCardButton from '../PriceCardButton/PriceCardButton';
import PriceCardContent from '../PriceCardContent/PriceCardContent';
import styles from './PriceCard.module.sass'

const PriceCard = ({name, description, price, content}) => {
  return (<div className={styles.container}>
  <PriceCardHeader
    name={name}
    description={description}
    price={price}
    
    />
    <PriceCardContent
    content={content}/>
    {/* <PriceCardButton/> */}
  </div>
    
    
  );
}

export default PriceCard