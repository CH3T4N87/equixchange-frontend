import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <div className="support-hero">
            <div className="container">
                <div className="row support-hero-row">
                    <div className="col-lg-6">
                        <h4 className="mt-5">Support Portal</h4>
                        <h4 className="mt-5">
                            Search for an answer or browse help topics to create a ticket
                        </h4>

                        <div class="input-group mt-4">
                            <span class="input-group-text" id="basic-addon3">
                                Eg: how do i activate my F&O,why.....
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                id="basic-url"
                                aria-describedby="basic-addon3 basic-addon4"
                            />
                        </div>
                        <div className="support-links mt-3 mb-5">
                            <span>Track account opening</span>
                            <span>Track segment activation</span>
                            <span>Intraday margins</span> <span>Kite user manual</span>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <p className="mt-5">Track Tickets</p>
                        <h4>Featured</h4>
                        <span>Due to the settlement holiday on Monday, your account balance will not include the following credits on 16 September, 2024:</span>
                        <li>Intraday profits made in the Equity segment on Sept 13, 2024</li>
                        <li>Credits from trades made in NFO, Currency, and Commodity derivatives on Sept 13, 2024. This will include options premium credits, futures M2M profits, etc.</li>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
