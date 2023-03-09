import React from 'react';
import htmlContent from './ExternalPage.jsx';

/*Define a new function component in ExternalPage.js that returns
the HTML content as a string using the dangerouslySetInnerHTML
prop.*/
function ExternalPage() {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    );
}

export default ExternalPage;

/* Note that the !!raw-loader! syntax is used to import
the HTML file as a string. */