import React, { useState, useEffect } from 'react';
import "./Navbar.css";
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'; 
import { jwtDecode } from 'jwt-decode';

function Navbar() {
  const [isloggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    window.location.href = '/login';
  };

  const goToDashboard = () => {
    const token = localStorage.getItem("token");
    window.location.href = `https://dashboard-equixchange.vercel.app/?token=${token}`;

  }

  return (
    // <div className='container'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid nav-content">
        <Link class="navbar-brand" to={"/"}><img src='media/images/logo.png' alt='Logo' />EquiXchange</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item ">
              <Link class="nav-link active" to={"/about"}>About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={"/products"}>Products</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={"/pricing"}>Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={"/support"}>Support</Link>
            </li>
            {!isloggedIn ? (
              <>
                &nbsp;&nbsp;<li class="nav-item"><Link class="nav-link active btn btn-success" style={{ color: 'white' }} to="/login">Login</Link></li>&nbsp;
                <li class="nav-item"><Link class="nav-link active btn btn-dark" style={{ color: 'white' }} to="/signup">Sign Up</Link></li>
              </>
            ) : (
              <>

                <li class="nav-link active btn btn-danger" style={{ color: 'white' }} onClick={handleLogout}>Logout</li>&nbsp;&nbsp;&nbsp;
                <li class="nav-link active btn btn-info" onClick={goToDashboard}>Dashboard</li>

              </>
            )}
          </ul>

        </div>
      </div>
    </nav>
    // </div>
  );
}

export default Navbar;