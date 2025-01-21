import React from 'react'
import high from "./images/hq.svg";
import gua from "./images/guarantee.svg";
import sup from "./images/support.svg";
import sip from "./images/shipping.svg";
function Blog1() {
  return (
   <div>



  <div classname="container blog-cover mt-5">

<div className='left-blog-side'>




</div>
<div classname="right-blog-side">
  
</div>

  </div>
    <div className="wrap-foot-sect">
        <div className="foot-sect">
          
            <img src={high} height="60px" width="60px" />
          
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
            <li>Enter Your Email Address</li>
            <li>Subscribe</li>
          </div>
        </div>
      </div>
      <hr />
      <div className="right-rs">2023 furino. All rights reverved</div>
    </div>


    
  )
}

export default Blog1