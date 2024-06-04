import React from 'react'

function Contact() {
  return (
    <>
      <div className="container-fluid contactmaincontain">
        <p className='navtitle'>Home /<b> Contact</b></p>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 contactcol">
              <div className="container contactcontain">
                <div className="row contactinnerrow">
                  <div className="col-3">
                    <div className="orangecontain">
                      <i class="lni lni-phone"></i>
                    </div>
                  </div>
                  <div className="col-6 callus">
                    <h5>Call to US</h5>
                  </div>
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>
                <div className="row rowline">
                  <div className="col-3">
                    <div className="orangecontain">
                      <i class="lni lni-envelope"></i>
                    </div>
                  </div>
                  <div className="col-6 callus">
                    <h5>Write To US</h5>
                  </div>
                </div>
                <p>Fill out our form and we will contact <br /> you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>




              </div>

            </div>
            <div className="col-sm-8">
              <div className="container fieldcontain">
                <form>
                  <div className="row">
                    <div class="form-floating col-md-4">
                      <input type="text" class="form-control" id="nameInput" placeholder="Your Name" />
                      <label for="nameInput">Your Name</label>
                    </div>
                    <div class="form-floating col-4">
                      <input type="email" class="form-control" id="emailInput" placeholder="Your Email" />
                      <label for="emailInput">Your Email</label>
                    </div>
                    <div class="form-floating col-4">
                      <input type="phone" class="form-control" id="phoneInput" placeholder="Your Phone" />
                      <label for="phoneInput">Your Phone</label>
                    </div>
                    <br />
                    <div class="mb-12 contacttextarea">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Your Message'></textarea>
                    </div>
                  </div>

                </form>
                <div className="row">
                  <div className="col">
                  <button type="button" className="btn btn-primary viewmorebutton">Send Message</button>
                  </div>
                
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact