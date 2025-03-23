import React from "react";
import "./Universe.css";
import Button from '@mui/material/Button';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1>The EquiXchange Universe</h1>
          <p className="mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-2 universe">
          <div className="text-center">
            <img src="media\images\zerodhaFundhouse.png" alt="" />
            <p className="text-muted mt-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="text-center mt-5">
            <img src="media\images\streakLogo.png" alt="" />
            <p className="text-muted mt-2">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-2 universe">
          <div className="text-center">
            <img src="media\images\sensibullLogo.svg" alt="" />
            <p className="text-muted mt-2">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="text-center mt-5">
            <img src="media\images\smallcaseLogo.png" alt="" />
            <p className="text-muted mt-2">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-2 universe">
          <div className="text-center">
            <img src="media\images\tijoriLogo.svg" alt="" />
            <p className="text-muted mt-2">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="text-center mt-5">
            <img src="media\images\dittoLogo.png" alt="" />
            <p className="text-muted mt-2">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
        <Button variant="outlined" className='btn btn-dark col-sm-8 offset-2 signup-btn'><a href="/signup">Sign up for free</a></Button>
        </div>
      </div>
      <hr className="mt-5 mb-5" />
    </div>
  );
}

export default Universe;
