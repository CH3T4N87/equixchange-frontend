import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col">
          <h1>Pricing</h1>
          <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
        </div>
        <hr className="mt-5" />
      </div>
      <div className="row text-center mt-5">
        <div className="col-lg-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h2>Free equity delivery</h2>
          <p className="mt-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-lg-4">
          <img src="media/images/other-trades.svg" alt="" />
          <h2>Intraday and F&O trades</h2>
          <p className="mt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-lg-4">
          <img src="media/images/pricing0.svg" alt="" />
          <h2>Free direct MF</h2>
          <p className="mt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
      <hr className="mt-5"/>
    </div>
  );
}

export default Hero;
