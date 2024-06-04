import React from 'react';
import img2 from '../images/airpods.png';

function Banner() {
    return (
        <>
            <div className="container banner">
                <div className="row">
                    <div className="col">
                        <p>Categories</p>
                        <h4>
                            Enhance Your <br />
                            Music Experience
                        </h4>
                        <div className="row bannertimerow">
                            <div className="col-sm-2">
                                <div className="container roundtime">
                                    <h5>25</h5>
                                    <p>Hours</p>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="container roundtime">
                                    <h5>05</h5>
                                    <p>Days</p>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="container roundtime">
                                    <h5>59</h5>
                                    <p>Minutes</p>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="container roundtime">
                                    <h5>35</h5>
                                    <p>Seconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <button type="button" className="btn btn-primary buynowbutton">Buy Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col img2col">
                        <img src={img2} className='airpodimg' alt="" />
                    </div>

                </div>

            </div>
        </>

    )
}

export default Banner