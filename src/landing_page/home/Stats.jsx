import React from 'react';
import "./Stats.css";

function Stats() {
    return (
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-lg-5  mt-5 StatsTxt mb-5'>
                    <h1 className=''>Trust with confidence</h1>
                    <h4 className='mt-5'>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4 className='mt-4'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4 className='mt-4'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4 className='mt-4'>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>


                </div>
                <div className='col-lg-6  StatImgLinks mt-5 mb-5'>
                    <div>
                        <img src='media/images/ecosystem.png' alt='StatImg' />
                        {/* <img src='media/images/ecosystem-bg.png' alt='StatImg' /> */}
                    </div>
                    <div className='statLinks'>
                        <a href='/'>Explore our products &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='/'>Try Kite demo &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;