import React from 'react';
import styles from './PriceCardContent.module.sass'


function PriceCardContent ({content}) {

  const renderContent = (content) => {
    return (
        <ul>
            {content.map((item, index) => (
                <li key={index}>
                    {Array.isArray(item) ? renderContent(item) : item}
                </li> 
            ))}
        </ul>
    );
};

return (<div className={styles.cardContent}> 
{renderContent(content)}
</div>
)


};

export default PriceCardContent