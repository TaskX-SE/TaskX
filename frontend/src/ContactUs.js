import React from "react";
import './ContactUs-css.css'

function ContactUsPage(){

    const handleSubmit = e => {
        e.preventDefault();
        
      }

  return (
    <div className="bg-info contact4 overflow-hiddedn position-relative">
  <div className="row no-gutters">
    <div className="container">
      <div className="col-lg-6 contact-box mb-4 mb-md-0">
        <div className="">
          <h1 className="title font-weight-light text-white mt-2">Contact Us</h1>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input className="form-control text-white" type="text" placeholder="name"></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input className="form-control text-white" type="email" placeholder="email address"></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <textarea className="form-control text-white" rows="3" placeholder="message"></textarea>
                </div>
              </div>
              <div className="col-lg-12 d-flex align-items-center mt-2">
                <button type="submit" className="btn bg-white text-inverse px-3 py-2"><span> Submit</span></button>
                <span className="ml-auto text-white align-self-center"><i class="fa fa-mobile-phone" style={{fontSize: "1.3rem"}}></i>  +91 7016098244</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-lg-6 right-image p-r-0">
      <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ahmedabad%20University+(TaskX)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%" height="538" frameborder="0" style={{border: "0"}}></iframe>
    </div>
  </div>
</div>
  );
}

export default ContactUsPage;