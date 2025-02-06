import React ,{ useEffect, useRef } from 'react';
import "./Pricing.css";
import lottie from 'lottie-web';
import animationData from './Animation.json';

function Pricing() {

  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current, // The DOM element where the animation will be rendered
      renderer: 'svg', // Render as SVG
      loop: true, // Set to true for continuous looping
      autoplay: true, // Auto-start the animation
      animationData: animationData, // Your Lottie JSON file
    });

    return () => animation.destroy(); // Cleanup the animation when component unmounts
  }, []);

  return (
    <div className='container mt-5 pricingContainer'>
      <div className='row'>
        <div className='col-lg-4'>
          <h2 className='mb-3 mt-5'>Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='/' className='mt-3'>See Pricing &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='col-lg-4 '>
          <div className='pricing'>
          <img src='media\images\pricing0.svg' alt='PricingImg'></img>
          <span>Free equity delivery
          and direct mutual funds</span>
          </div>
        </div>

        <div className='col-lg-4 col-sm-12 pricing-animation' ref={container}
          style={{ width: '300px', height: '300px' }}>
        </div>

      </div>
    </div>
  );
}

export default Pricing;