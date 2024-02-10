
import React, {useState, useEffect} from "react";
// import jsonData from '../../api/priseContent.json'
import PriceCard from "../../components/PriceCard/PriceCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./PricePage.module.sass"



function PricePage () {
  const [dataFetch, setDataFetch] = useState([]);
  const dataPath = '/priseContent.json'

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(dataPath);
              if (!response.ok) {
                  throw new Error(`Network response was not ok, status: ${response.status}`);
              }
              const jsonDataFetch = await response.json();
              setDataFetch(jsonDataFetch.packages);
          } catch (error) {
              console.error('There was a problem with the fetch operation:', error);
          }
      };

      fetchData();
  }, []);
  
return (<div >
  <Header/>
  <div className={styles.container}>
  {dataFetch.map((card, index) => (
  <PriceCard key={index}
                name={card.name}
                color={card.color}
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


