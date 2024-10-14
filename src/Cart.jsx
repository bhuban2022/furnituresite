import React from "react";
import houselogo from "./images/house-logo.svg";
import high from "./images/hq.svg";
import gua from "./images/guarantee.svg";
import sup from "./images/support.svg";
import sip from "./images/shipping.svg";
import bigsof from "./images/Asgaard sofa 3.svg";
import star from "./images/stars.svg";
import deleteicon from "./images/deleteicon.svg"


const Cart = () => {
  return (
    <div>
      <div className="backgrou">
        <div>
          <img src={houselogo} />
        </div>
        <div className="titles">Cart</div>
        <div className="d-flex gap-3">
          <div>Home</div>
          <div>
            <i class="fa-solid fa-greater-than"></i>
          </div>
          <div>Cart</div>
        </div>
      </div>

      <div className="product-new-overall mb-5">

        <div className="product-wrap-new-wrapper">
        <div className="products-wrap-new">
          <div>Products</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div> <div className="wrapof-bckng">
            <div className="bckng-new">
              <img src={bigsof} height="90px" />
            </div>

            <div className="item-title">Asgaard sofa</div>
            <div className="item-price">Rs. 250,000.00</div>
           <div className="rect-angle">
1
           </div>
           <div className="rect-number">
           Rs. 250,000.00
           </div>
           <div>
            <img src={deleteicon}/>
           </div>
          </div>
          </div>

        <div className="cart-totals mt-5">
          <div className="cart-totl">Cart Totals</div>
          <div className="sub-total">
            <div>Subtotal</div>
            <div>Rs. 250,000.00</div>
          </div>

          <div className="total">
            <div className=" total-alignm">
              <div className="">Total</div>
              <div>Rs. 250,000.00</div>
            </div>
            
          </div>
          <div className="chck-out-wrap">
              <div className="chck-out">Check Out</div>
            </div>
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

export default Cart;
