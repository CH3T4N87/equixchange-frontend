import React from 'react';
import "./Awards.css";

function Awards() {
    return (
        <div className='container '>
            <div className='row mt-5 awards'>

                <div className='col-lg-6 col-sm-8 largestBrokerImg'>
                    <img src='/media/images/largestBroker.svg' alt='AwardImg' />
                </div>

                <div className='col-lg-6 col-sm-10  mt-5 largestBrokerTxt'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million EquiXchange clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row mt-5 mb-5'>
                        <div className='col-6'>
                            <li>Futures and Options</li>
                            <li>commondity derivatives</li>
                            <li>Currency derivatives</li>
                        </div>
                        <div className='col-6'>
                            <li>Stocks and IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </div>
                    </div>
                    <img className='mt-2 pressLogoImg' src='media/images/pressLogos.png' alt='pressLogoImg' />
                </div>
            </div>
        </div>
    );
}

export default Awards;