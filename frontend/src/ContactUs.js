import React, {useState} from "react";
import './ContactUs-css.css'
const axios = require('axios').default;

async function createFeedback(newFeedback) {

  try{
  let res = await axios.post('http://localhost:5000/feedbacks/add-feedback', newFeedback);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

function ContactUsPage(){

    const [userName, setName] = useState(null)
    const [userEmail, setEmail] = useState(null)
    const [feedback, setFeedback] = useState(null)

    function updateName(evt) {
        setName(evt.target.value);
      }

      function updateEmail(evt) {
        setEmail(evt.target.value);
      }

      function updateFeedback(evt) {
        setFeedback(evt.target.value);
      }

    const handleSubmit = e => {
        e.preventDefault();
        const newFeedback = {
          "name": userName,
          "email": userEmail,
          "response": feedback
        }
        createFeedback(newFeedback);
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
                  <input className="form-control text-white" value={userName} onChange={evt => updateName(evt)} type="text" placeholder="name"></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <input className="form-control text-white" value={userEmail} onChange={evt => updateEmail(evt)} type="email" placeholder="email address"></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-2">
                  <textarea className="form-control text-white" value={feedback} onChange={evt => updateFeedback(evt)} rows="3" placeholder="message"></textarea>
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