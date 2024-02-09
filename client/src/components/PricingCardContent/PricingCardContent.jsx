import React from 'react';


function PricingCardContent ({content}) {

  const renderContent = (content) => {
    return (
        <ul>
            {content.map((item, index) => (
                <li key={index}>
                    {Array.isArray(item) ? renderContent(item) : item}
                </li> d
            ))}
        </ul>
    );
};

return (<div> {renderContent(content)}</div>)
};

export default PricingCardContent