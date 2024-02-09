
import React, {useState} from "react";
import jsonData from '../../api/priseContent.json'
import PricingCard from "../../components/PricingCard/PricingCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function PricingPage () {
  const [data, setData] = useState(jsonData.packages);
return (<div >
  <Header/>
  <div>
  {data.map((card, index) => (
  <PricingCard key={index}
                name={card.name}
                description={card.description}
                price={card.price}
                content={card.content}
                />
  ))}
 
  </div>
  
  <Footer/>
</div>)
  }
export default PricingPage