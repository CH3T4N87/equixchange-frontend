import React from 'react';
import "./Footer.css";
function Footer() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-lg'>
                    <a class="navbar-brand" href="/"><img src='media/images/logo.png' alt='Logo' />EquiXchange</a>
                    <p>© 2024 - 2024, EquiXchange Broking Ltd.All rights reserved.</p>

                    <div className='footer-icons'>
                        <a href='/'><i class="fa-brands fa-x-twitter text-muted"></i></a>
                        <a href='/'><i class="fa-brands fa-facebook text-muted"></i></a>
                        <a href='/'><i class="fa-brands fa-instagram text-muted"></i></a>
                        <a href='/'><i class="fa-brands fa-linkedin text-muted"></i></a>
                    </div>
                    <hr></hr>
                    <div className='footer-icons'>
                        <i class="fa-brands fa-youtube text-muted"></i>
                        <i class="fa-brands fa-whatsapp text-muted"></i>
                        <i class="fa-brands fa-telegram text-muted"></i>
                    </div>
                </div>
                <div className='col-lg footer-links'>
                    <h5 className='mb-3'>Company</h5>
                    <a href='/'> About </a> <br></br>
                    <a href='/' > Products </a><br></br>
                    <a href='/' >  Pricing </a><br></br>
                    <a href='/' >  Referral programme </a><br></br>
                    <a href='/' >  Careers </a><br></br>
                    <a href='/' >  Zerodha.tech </a><br></br>
                    <a href='/' >  Press & media </a><br></br>
                    <a href='/' >  Zerodha Cares (CSR) </a><br></br>
                </div>
                <div className='col-lg footer-links'>
                    <h5 className='mb-3'>Support</h5>
                    <a href='/'>  Contact us</a> <br></br>
                    <a href='/'>  Support portal</a><br></br>
                    <a href='/'>  X-Connect blog</a><br></br>
                    <a href='/'>   List of charges</a><br></br>
                    <a href='/'>   Downloads & resources</a><br></br>
                    <a href='/'>   Videos</a><br></br>
                    <a href='/'>  Market overview</a><br></br>
                    <a href='/'>   How to file a complaint?</a><br></br>
                    <a href='/'>   Status of your complaints</a>
                </div>
                <div className='col-lg footer-links'>
                    <h5 className='mb-3'>Account</h5>
                    <a href='/'>  Open an account</a> <br></br>
                    <a href='/'>  Fund transfer</a><br></br>
                </div>
            </div>
            <div className='mt-5 footer-info '>
                <p>EquiXchange Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through EquiXchange Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through EquiXchange Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: EquiXchange Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='/'>complaints@equixchange.com</a>, for DP related to <a href='/'>dp@equixchange.com</a> . Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                <p>Procedure to file a complaint on <a href='/'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='/'>create a ticket here</a>.</p>
            </div>
            <span className='developer'>Designed and Developed by <a href="https://linkedin.com/in/chetan-kshirsagar87">Chetan Kshirsagar</a></span>
        </div>
    );
}

export default Footer;