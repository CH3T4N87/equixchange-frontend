import React from 'react';
import "./LeftSection.css";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-6 leftSection-Img ">
                    <img src={imageURL} alt=""/>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 mt-5 leftSection-text">
                    <h1>{productName}</h1>
                    <p className='mt-3'> {productDescription} </p>
                    <div className='mt-3'><a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn More <i class="fa-solid fa-arrow-right"></i></a></div>
                    <div className='mt-3'><a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="GooglePlayBadge"  /></a>
                    <a href={appStore} style={{marginLeft:"3rem"}}><img src="media/images/appstoreBadge.svg" alt="GooglePlayBadge"  /></a></div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;