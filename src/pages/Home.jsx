import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/iphone-14-pro-png.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../App.css";
import Homeproducts from "../Components/Homeproducts";
import Categories from "../Components/Categories";
import Bestselling from "../Components/Bestselling";
import Banner from "../Components/Banner";
import Exploreproducts from "../Components/Exploreproducts";
import Newarrival from "../Components/Newarrival";
import Features from "../Components/Features";

function Home() {
    return (
        <>
            <section className="topsection">
                <div className="row owlrowcol">
                    <div className="col-md-4">
                        <div className="container topcontain">
                            <p>Woman's Fashion</p>
                            <p>Men's Fashion</p>
                            <p>Electronic's</p>
                            <p>Home & Life Style</p>
                            <p>Medicine</p>
                            <p>Sport's and Outdoor</p>
                            <p>Baby's & Toys</p>
                            <p>Groceries & Pets</p>
                            <p>Health & Beauty</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <OwlCarousel
                            className="owl-theme aboutowl"
                            items={1}
                            loop={true}
                            autoplay={true}
                            autoplayTimeout={5000}
                            autoplayHoverPause={false}
                            nav
                        >
                            <div className="item">
                                <div className="row">
                                    <div className="col">
                                        <p>iphone 14 series</p>
                                        <h4>
                                            Up to 10% <br />
                                            off the voucher.
                                        </h4>
                                        <Link to="">
                                            <u>
                                                <h6 className="shpnow">Shop now</h6>
                                            </u>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <img className="img" src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col">
                                        <p>iphone 14 series</p>
                                        <h4>
                                            Up to 10% <br />
                                            off the voucher.
                                        </h4>
                                        <Link to="">
                                            <u>
                                                <h6 className="shpnow">Shop now</h6>
                                            </u>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <img className="img" src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col">
                                        <p>iphone 14 series</p>
                                        <h4>
                                            Up to 10% <br />
                                            off the voucher.
                                        </h4>
                                        <Link to="">
                                            <u>
                                                <h6 className="shpnow">Shop now</h6>
                                            </u>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <img className="img" src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col">
                                        <p>iphone 14 series</p>
                                        <h4>
                                            Up to 10% <br />
                                            off the voucher.
                                        </h4>
                                        <Link to="">
                                            <u>
                                                <h6 className="shpnow">Shop now</h6>
                                            </u>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <img className="img" src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <section className="productsection">
                <Homeproducts></Homeproducts>
            </section>
            <section className="categorysection">
                <Categories></Categories>
            </section>
            <section className="bestsellingsection">
                <Bestselling></Bestselling>
            </section>
            <section className="bannersection">
                <Banner></Banner>
            </section>
            <section className="exploresection">
                <Exploreproducts></Exploreproducts>
            </section>
            <section className="newsection">
                <Newarrival></Newarrival>
            </section>
            <section className="featuressection">
                <Features></Features>
            </section>

        </>
    );
}

export default Home;
