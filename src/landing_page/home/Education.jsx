import React from 'react';
import "./Education.css";

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 EduImg'>
                    <img src='media/images/education.svg' alt='EducationImg'/>
                </div>
                <div className='col-lg-5 mt-5 EduTxt'>
                    <h3>Free and open market education</h3>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a   href='/' className='mt-5'>Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a   href='/' className='mt-5'>TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;