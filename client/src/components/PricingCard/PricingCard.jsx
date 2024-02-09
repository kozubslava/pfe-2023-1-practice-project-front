import React from 'react';
import PricingCardHeader from '../PricingCardHeader/PricingCardHeader';
import PricingCardButton from '../PricingCardButton/PricingCardButton';
import PricingCardContent from '../PricingCardContent/PricingCardContent';
const PricingCard = ({name, description, price, content}) => {
  return (<>
  <PricingCardHeader
    name={name}
    description={description}
    price={price}
    
    />
    <PricingCardContent
    content={content}/>
    <PricingCardButton/>
  </>
    
    
  );
}

export default PricingCard