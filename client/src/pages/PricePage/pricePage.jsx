
import React, {useState} from "react";
import jsonData from '../../api/priseContent.json'
import PriceCard from "../../components/PriceCard/PriceCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./PricePage.module.sass"



function PricePage () {
  const [data, setData] = useState(jsonData.packages);
return (<div >
  <Header/>
  <div className={styles.container}>
  {data.map((card, index) => (
  <PriceCard key={index}
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
export default PricePage