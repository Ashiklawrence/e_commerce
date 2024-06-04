import React from 'react'

function Features() {
    return (
        <>
            <div className="row">
                <div className="col-sm-4 text-center  featcol">
                    <div className="grey">
                        <div className="black">
                            <i class="lni lni-cart"></i>
                        </div>
                    </div>
                    <br />
                    <h4>FREE AND FAST DELIVERY</h4>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="col-sm-4 text-center featcol">
                    <div className="grey">
                        <div className="black">
                            <i class="lni lni-support"></i>
                        </div>
                    </div>
                    <br />
                    <h4>24/7 CUSTOMER SERVICE</h4>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className="col-sm-4 text-center featcol">
                    <div className="grey">
                        <div className="black">
                            <i class="lni lni-protection"></i>
                        </div>
                    </div>
                    <br />
                    <h4>MONEY BACK GUARANTEE</h4>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>
        </>
    )
}

export default Features