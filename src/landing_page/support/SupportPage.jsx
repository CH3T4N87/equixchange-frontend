import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
    return ( 
        <>
            <Hero />
            <CreateTicket />
            <hr className='mt-5'/>
        </>
     );
}

export default SupportPage;