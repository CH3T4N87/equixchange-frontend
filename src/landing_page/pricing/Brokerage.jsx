import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <a href="/" className="text-center">
            <h5 className="fw-100 mb-3">Brokerage calculator</h5>
          </a>
          <li style={{fontSize:"0.8rem"}}>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li style={{fontSize:"0.8rem"}}>Digital contract notes will be sent via e-mail.</li>
            <li style={{fontSize:"0.8rem"}}>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li style={{fontSize:"0.8rem"}}>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li style={{fontSize:"0.8rem"}}>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li style={{fontSize:"0.8rem"}}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
        </div>
        <div className="col-lg-4">
          <a href="/" className="">
            <h5 className="fw-100">List of charges</h5>
          </a>
        </div>
      </div>
      <hr className="mt-5"/>
    </div>
  );
}

export default Brokerage;
