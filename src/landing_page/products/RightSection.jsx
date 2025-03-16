import React from 'react';
import "./RightSection.css";

function RightSection({imageURL, productName, productDescription , learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-5 mt-5 rightSection-text">
                <h1>{productName}</h1>
                    <p className='mt-3'> {productDescription} </p>
                    <div className='mt-3'>
                    <a href={learnMore}>{learnMore} <i class="fa-solid fa-arrow-right"></i></a></div>
                    
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 rightSection-Img">
                    <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;