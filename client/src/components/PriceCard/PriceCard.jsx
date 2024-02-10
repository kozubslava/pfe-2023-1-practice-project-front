import React from 'react';
import PriceCardHeader from '../PriceCardHeader/PriceCardHeader';
import PriceCardButton from '../PriceCardButton/PriceCardButton';
import PriceCardContent from '../PriceCardContent/PriceCardContent';
import styles from './PriceCard.module.sass'

const PriceCard = ({name, color, description, price, content}) => {
  return (<div className={styles.container} >
    
  <PriceCardHeader
    name={name}
    description={description}
    price={price}
    color={color}
    
    />
    <PriceCardContent
    content={content}/>
    <PriceCardButton color={color}>Start</PriceCardButton>
  </div>
    
    
  );
}

export default PriceCard
