import React from 'react'
import Salesstats from '../Components/Salesstats'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imgperson1 from '../images/jeremy-mcgilvrey-Mum-4dB0VsE-unsplash.jpg'
import imgperson2 from '../images/ph-m-duy-quang-QGr6H7pri-Q-unsplash.jpg'
import imgperson3 from '../images/andrew-power-y9L5-wmifaY-unsplash.jpg'
import imgperson4 from '../images/olga-zhuravleva-A3MleA0jtoE-unsplash.jpg'
import Features from '../Components/Features';

function About() {
  return (
    <>
      <p className='navtitle'>Home /<b> About</b></p>
      <section className='abtowlsection'>
        <div className="container-fluid aboutcontainer">
          <div className="row">
            <div className="col-sm-6 abouttextcol">
              <h1>Our Story</h1>
              <p>Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
                makterplace with an active presense in Bangladesh. Supported <br />
                by wide range of tailored marketing, data and service solutions, <br />
                Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
                millioons customers across the region. <br /> <br />
                Exclusive has more than 1 Million products to offer, growing at a <br />
                very fast. Exclusive offers a diverse assotment in categories <br />
                ranging from consumer.</p>
            </div>
            <div className="col-sm-6 aboutimgcol">

            </div>
          </div>
        </div>
      </section>
      <Salesstats></Salesstats>
      <section className='aboutowlsection'>
       <div className="container-fluid abtowlcontain">
       <OwlCarousel
          className="owl-theme aboutowl"
          items={3}
          loop={true}
          autoplay={false}
          autoplayTimeout={5000}
          autoplayHoverPause={false}
          nav
        >
          <div className="card owlcardcus" style={{ width: '20rem' }}>
            <img src={imgperson1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1>Tom Cruise</h1>
              <p class="card-text">Founder and chairman.</p>
              <i class="lni lni-twitter"></i>
              <i class="lni lni-instagram"></i>
              <i class="lni lni-linkedin"></i>
            </div>
          </div>
          <div className="card owlcardcus" style={{ width: '20rem' }}>
            <img src={imgperson2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1>Emma Watson</h1>
              <p class="card-text">Managing Director</p>
              <i class="lni lni-twitter"></i>
              <i class="lni lni-instagram"></i>
              <i class="lni lni-linkedin"></i>
            </div>
          </div>
          <div className="card owlcardcus" style={{ width: '20rem' }}>
            <img src={imgperson3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1>Will Smith</h1>
              <p class="card-text">Product Designer</p>
              <i class="lni lni-twitter"></i>
              <i class="lni lni-instagram"></i>
              <i class="lni lni-linkedin"></i>
            </div>
          </div>
          <div className="card owlcardcus" style={{ width: '20rem' }}>
            <img src={imgperson4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1>Tom Cruise</h1>
              <p class="card-text">Founder and chairman.</p>
              <i class="lni lni-twitter"></i>
              <i class="lni lni-instagram"></i>
              <i class="lni lni-linkedin"></i>
            </div>
          </div>
        </OwlCarousel>
       </div>
      </section>
      <section className="abtfeaturessection">
        <Features ></Features>
      </section>
    </>
  )
}

export default About