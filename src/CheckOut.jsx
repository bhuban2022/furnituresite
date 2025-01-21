import React from "react";
import houselogo from "./images/house-logo.svg";
import high from "./images/hq.svg";
import gua from "./images/guarantee.svg";
import sup from "./images/support.svg";
import sip from "./images/shipping.svg";
import arrdown from "./images/downarrow.svg";
import point from "./images/point.svg";
import elips from "./images/ellipse1.svg";

const CheckOut = () => {
  return (
    <div>
      <div className="backgrou">
        <div>
          <img src={houselogo} />
        </div>
        <div className="titles">Check Out</div>
        <div className="d-flex gap-3">
          <div>Home</div>
          <div>
            <i class="fa-solid fa-greater-than"></i>
          </div>
          <div>Check Out</div>
        </div>
      </div>
      <div className="d-flex gap-3">
        <div className="billing-sect-wrapper container">
          <div className="bi-detail">Billing details</div>
          <div className="  d-flex gap-3">
            <div>
            <label>First name</label>
            <input type ="text" className="billing-sect"/>
            </div>
          
            <div>
            <label>First name</label>
            <input type ="text" className="billing-sect"/>
            </div>
            {/* <div className="billing-sect">Last Name</div> */}
          </div>
          <div className="billing-sect">Company Name (Optional)</div>

          <div>Country / Region</div>
          <div className="d-flex ">
            <select className="billing-sect">Srilanka
              pakistan
            </select>
        
            
            <div></div>
          </div>


          <input type="text" className="billing-sect" placeholder="Street Address"/>
          <input type="text" className="billing-sect" placeholder="Province"/>

          
          <div className="d-flex billing-sect-new">
          <input type="text" className="billing-sect" placeholder="Western Union"/>
            {/* <div>
              <img src={arrdown} />
            </div> */}
            <div></div>
          </div>
          <div className="billing-sect">Zip Code</div>
          <div className="billing-sect">Phone</div>
          <div className="billing-sect">Email</div>
          <div className="billing-sect">Additional Information</div>
        </div>

        
        <div className="order-wrap">
          <div className="d-flex gap-3">
            <div>Products</div>
            <div>Sub Total</div>
          </div>

          <div className="d-flex gap-3">
            <div>Asgard Sofa</div>
            <div>Rs. 250,000.00</div>
          </div>

          <div className="d-flex gap-3">
            <div>Total</div>
            <div>Rs. 250,000.00</div>
          </div>
          <hr />

          <div className="d-flex gap-2">
            <div>
              <img src={point} />
            </div>
            <div>Direct Bank Transfer</div>
          </div>

          <div className="m-pay">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </div>

          <div className="d-flex gap-3">
            <div>
              <img src={elips} />
            </div>
            <div>Direct Bank Transfer</div>
          </div>

          <div className="d-flex gap-3">
            <div>
              <img src={elips} />
            </div>
            <div>Cash On Delivery</div>
          </div>

          <div className="m-pay">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <b>privacy policy.</b>
          </div>
          <div className="place">Place order</div>
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

export default CheckOut;
