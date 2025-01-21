import React from "react";
import houselogo from "./images/house-logo.svg";
import high from "./images/hq.svg";
import gua from "./images/guarantee.svg";
import sup from "./images/support.svg";
import sip from "./images/shipping.svg";
import address from "./images/ad.svg";
import time from "./images/tm.svg";
import phone from "./images/pn.svg";

const Contact = () => {
  return (
    <div>
      <div className="backgrou">
        <div>
          <img src={houselogo} />
        </div>
        <div className="titles">Contact</div>
        <div className="d-flex gap-3">
          <div>Home</div>
          <div>
            <i class="fa-solid fa-greater-than"></i>
          </div>
          <div>Check Out</div>
        </div>
      </div>

      <div className="get-in">Get In Touch With Us</div>

      <div className=" more-info container">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </div>


<div className="d-flex gap-4 container mt-4">
  <div>
      <div className="d-flex gap-2">
        <div>
          <img src={address} />
        </div>
        <div>
          <div className="title-cont">Address</div>
          <div className="descr-cont">
            236 5th SE Avenue, New York NY10000, United State
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <div>
          <img src={phone} />
        </div>
        <div>
          <div className="title-cont">Phone</div>
          <div className="descr-cont">
            Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <div>
          <img src={time} />
        </div>
        <div>
          <div className="title-cont">Time</div>
          <div className="descr-cont">
            Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
          </div>
        </div>
      </div>


      </div>
    <div className="billing-sect-wrap-right">


      <label>Your name</label>
     
<input type="text" placeholder="abc" className="billing-sect"/>

      <label>Email Address</label>
      
      <input type="text" placeholder="abc@gmail.com" className="billing-sect"/>

      <label>Subject</label>
      
      <input type="text" placeholder="This is an optional" className="billing-sect"/>
      <label>Message</label>
      <input type="text" placeholder="This is an optional" className="billing-sect-area"/>

      <div className="submit-btn">Submit</div>

</div>
</div>



      <div className="wrap-foot-sect">
        <div className="foot-sect">
          <div>
            <img src={high} height="60px" width="60px" />
          </div>
          <div>
            <div className="heading">High Quality</div>
            <div className="desc">created from top materials</div>
          </div>
        </div>
        <div className="foot-sect">
          <div>
            <img src={gua} height="60px" width="60px" />
          </div>
          <div>
            <div className="heading">Warranty Protection</div>
            <div className="desc">created from top materials</div>
          </div>
        </div>
        <div className="foot-sect">
          <div>
            <img src={sip} height="60px" width="60px" />
          </div>
          <div>
            <div className="heading">Free Shipping</div>
            <div className="desc">created from top materials</div>
          </div>
        </div>

        <div className="foot-sect">
          <div>
            <img src={sup} height="60px" width="60px" />
          </div>
          <div>
            <div className="heading">24 / 7 Support</div>
            <div className="desc">created from top materials</div>
          </div>
        </div>
      </div>

      <div className="footer-sect container">
        <div>
          <div className="footer-title">Funiro.</div>
          <div className="footer-desc">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </div>
        </div>

        <div className="link-sect">
          <li className="headin">Links</li>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div className="help-sect">
          <li className="headin">Help</li>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </div>
        <div className="news">
          <li className="headin">Newsletter</li>
          <div className="email-align">
            <li>Enter Your Email</li>
            <li>Subscribe</li>
          </div>
        </div>
      </div>
      <hr />
      <div className="right-rs">2023 furino. All rights reverved</div>
    </div>
  );
};

export default Contact;
