import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './Animation.json';
import "./Team.css";

function Team() {


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
        <div className="container">
            <div className="row"><h2 className='col-lg-2 mt-lg-5  offset-lg-5'>People</h2></div>
            <div className="row">
                <div className="col-lg-3 offset-lg-1 team-animation" ref={container}></div>
                {/* <div className="col-lg-2"></div> */}
                <div className="col-lg-5 mt-5 team-text">
                    <p>Chetan bootstrapped and founded EquiXchange in 2024 to overcome the hurdles he faced during his decade long stint as a trader. Today, Equixchange has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing games is his zen.</p>

                    <p>Connect on <a href="/">Homepage</a> / <a href="/">TradingQnA</a> / <a href="/">Twitter</a></p>
                </div>
            </div>
            <div className="row mt-5 team">
                {/* <div className="col-3"></div> */}
                <div className="col-lg-2 offset-3 team-details">
                    <div className="team-profile">
                        <img src="media/images/dev_2.jpg" alt="TeamMemberImg" />
                    </div>
                    <h5 className='mt-2'>Chetan Kshirsagar</h5>
                   <h6>Founder</h6>
                </div>
                <div className="col-lg-2 team-details">
                    <div className="team-profile">
                    <img src="media\images\dev_1.jpg" alt="TeamMemberImg" />
                   </div>
                   <h5 className='mt-2'>Paresh Deore</h5>
                   <h6>CTO</h6>
                </div>
                <div className="col-lg-2 team-details">
                    <div className="team-profile">
                    <img src="media/images/dev_3.jpg" alt="TeamMemberImg" />
                    </div>
                    <h5 className='mt-2'>Swanand Nerker</h5>
                   <h6>CCO</h6>
                </div>
                <div className="col-lg-2 team-details">
                    <div className="team-profile">
                    <img src="media/images/dev_4.jpeg" alt="TeamMemberImg" />
                    </div>
                    <h5 className='mt-2'>Sarvesh Lokhande</h5>
                   <h6>Chief of Education</h6>
                </div>
                <div className="col-lg-2 team-details">
                    <div className="team-profile">
                    <img src="media/images/dev_5.jpeg" alt="TeamMemberImg" />
                    </div>
                    <h5 className='mt-2'>Om Shukla</h5>
                   <h6>Director Strategy</h6>
                </div>
                {/* <div className="col-3"></div> */}
            </div>
        </div>
    );
}

export default Team;