import React from "react";
import styles from "./PriceCardButton.module.sass"

function PricingCardButton ({color, children}) {
  return(<button className={styles.button} style={{backgroundColor:`${color}`}}>{children}</button>)
  
}

export default PricingCardButton