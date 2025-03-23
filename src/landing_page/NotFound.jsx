import React from 'react';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 text-center mt-lg-5'>
            <div className='row'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p>Sorry , the page you are looking for doesn't exist !</p>
                <div className='row'>
                <Link variant="outlined" className='btn btn-dark col-sm-8 offset-2 signup-btn' to={"/"}>Go To Home !</Link>
                </div>
            </div>
        </div>
     );
}

export default NotFound;