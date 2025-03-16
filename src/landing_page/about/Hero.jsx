import React from 'react';
import "./Hero.css";
function Hero() {

    return (
        <div className='container mt-lg-5 mb-5'>
            <div className='row'>
                <h2 className='col-lg-8 offset-lg-2 text-muted mt-5 mb-5 about-text'>We pioneered the discount broking model in India.
                    Now, we are breaking ground with our technology.</h2>
            </div>
            <hr className='mt-lg-5 mb-5' />
            <div className='row mt-5'>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 mt-lg-5 about-text ">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col-lg-5 mt-lg-5 about-text">
                    <p> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p><a href="/">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="/">blog</a> or see what the media is <a href="/">saying about us</a>.</p>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
}

export default Hero;