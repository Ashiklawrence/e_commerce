import React from 'react'

function Footer() {
    return (
        <>
            <footer className="container-fluid footercontain">
                <div className="container footercontain2">
                    <div className="row">
                        <div className="col">
                            <h4>Exclusive</h4>
                            <br />
                            <h5>Subscribe</h5>
                            <p>Get 10% off your first order</p>
                            <input type="text" className='footerinput' placeholder='Enter your email'/>
                            <button className='footersearchbtn'><i class="lni lni-search-alt"></i></button>
                        </div>
                        <div className="col">
                            <h4>Support</h4>
                            <br />
                            <p>111 Bijoy sarani, Dhaka,<br />
                                DH 1515, Bangladesh.</p>
                        </div>
                        <div className="col">
                            <h4>Account</h4>
                            <br />
                            {/* <ul className='Footerlist'> */}
                                <p>My Account</p>
                                <p>Login / Register</p>
                                <p>Cart</p>
                                <p>Wish List</p>
                                <p>Shop</p>
                            {/* </ul> */}
                        </div>
                        <div className="col">
                            <h4>Quick Link</h4>
                            <br />
                            <p>Privacy Policy</p>
                                <p>Term of Use</p>
                                <p>FAQ</p>
                                <p>Contact</p>
                        </div>
                        <div className="col">
                            <h4>Download App</h4>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="row footerdownrow">
                    <p>&copy;Copyright Rimel 2022. All right reserved</p>
                </div>

            </footer>
        </>
    )
}

export default Footer