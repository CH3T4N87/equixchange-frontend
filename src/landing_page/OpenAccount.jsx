import React from 'react';
import Button from '@mui/material/Button';

function OpenAccount() {
    return ( 
        <div className='container p-5 text-center mt-lg-5'>
            <div className='row'>
                <h1 className='mt-5'>Open an EquiXchange account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div className='row'>
                <Button variant="outlined" className='btn btn-dark col-sm-8 offset-2 signup-btn'><a href="/signup">Sign up for free</a></Button>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;