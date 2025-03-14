import React from 'react';
import Button from '@mui/material/Button';
import "./Hero.css";

function Hero() {
    return ( 
        <div className='container p-5 text-center'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='HeroImg' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <div className='row'>
                <Button variant="outlined" className='btn btn-dark col-sm-8 offset-2 signup-btn'><a href="/signup">Sign up for free</a></Button>
                </div>
            </div>
        </div>
     );
}

export default Hero;