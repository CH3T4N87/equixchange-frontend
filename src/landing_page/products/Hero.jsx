import React from 'react';
import "./Hero.css";

function Hero() {
    return (
        <div className="container product-hero">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 mt-5 mb-5">
                    <h1>Technology</h1>
                    <h5 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h5>
                    <p className='mt-3'>Check out our investment <a href='/'>offerings &nbsp; <i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Hero;