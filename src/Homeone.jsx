import React from "react";
import ban from "./images/banner.svg";
import dot from "./images/dot.svg";
import view from "./images/view.svg";
import filter from "./images/filter.svg";
import one from "./images/1.svg";
import two from "./images/2.svg";
import three from "./images/3.svg";
import four from "./images/4.svg";
import five from "./images/5.svg";
import six from "./images/6.svg";
import high from "./images/hq.svg"
import gua from "./images/guarantee.svg"
import sup from "./images/support.svg"
import sip from "./images/shipping.svg"

const Homeone = () => {
  return (
    <div className="">
      <div className="backgrou">
        <div className="titles">Shop</div>
        <div className="d-flex gap-3">
          <div>Home</div>
          <div>
            <i class="fa-solid fa-greater-than"></i>
          </div>
          <div>Shop</div>
        </div>
      </div>

      <div className="foot ">

        <div className="d-flex foot-one">
      <div>
          <img src={filter} />
        </div>

        <div>Filter</div>

        <div>
          <img src={dot} />
        </div>
        <div>
          <img src={view} />
        </div>
        <div className="border-rgt"></div>    
        <div>Showing 1-16 of 32 results</div>
        </div>

        <div className="d-flex gap-2 newclass">
         
       
         <div className="sho">Show</div>
         <div className="sixt">16</div>
         <div>Sort By</div>
         <div className="def">Default</div>
       
     </div>
        </div>
       
        <div className="products-wrap container mt-5">
        <div className="products">
          <img src={two} />

          <div className="btm-txt">
            <div className="headin">Syltherine</div>
            <div>Stylish cafe chair</div>
            <div>
              Rp 2.500.000{" "}
              <span>
                <strike>Rp 3.500.000</strike>
              </span>
            </div>
          </div>

          <div className="circle">-30%</div>
        </div>
        <div className="products">
          <div className="pic-edit">
            <img src={three} />
            <div className="atc">Add to Cart</div>
            <div className="icons-align">
              <div>
                <i class="fa-solid fa-share-nodes"></i>
                share
              </div>
              <div>
                <i class="fa-solid fa-code-compare"></i>
                compare
              </div>
              <div>
                <i class="fa-regular fa-heart"></i>
                like
              </div>
            </div>
          </div>

          <div className="btm-txt">
            <div className="headin">Syltherine</div>
            <div>Stylish cafe chair</div>
            <div>
              Rp 2.500.000{" "}
              <span>
                <strike>Rp 3.500.000</strike>
              </span>
            </div>
          </div>

          <div className="circle">-30%</div>
        </div>
        <div className="products">
          <img src={four} />

          <div className="btm-txt">
            <div className="headin">Syltherine</div>
            <div>Stylish cafe chair</div>
            <div>
              Rp 2.500.000{" "}
              <span>
                <strike>Rp 3.500.000</strike>
              </span>
            </div>
          </div>

          <div className="circle">-50%</div>
        </div>
        <div className="products">
          <img src={five} />

          <div className="btm-txt">
            <div className="headin">Syltherine</div>
            <div>Stylish cafe chair</div>
            <div>Rp 2.500.000</div>
          </div>

          <div className="circle-one">New</div>
        </div>

        <div className="products">
          <img src={one} />

          <div className="btm-txt">
            <div className="headin">Syltherine</div>
            <div>Stylish cafe chair</div>
            <div>
              Rp 2.500.000{" "}
              <span>
                <strike>Rp 3.500.000</strike>
              </span>
            </div>
          </div>

          <div className="circle">-30%</div>
        </div>
        <div className="products">
          <img src={six} />

          <div className="btm-txt">
            <div className="headin">Syltherine</div>
            <div>Stylish cafe chair</div>
            <div>Rp 2.500.000</div>
          </div>

          <div className="circle-one">New</div>
        </div>
        <div className="products">
          <img src={one} />

          <div className="btm-txt">
            <div className="headin">Syltherine</div>
            <div>Stylish cafe chair</div>
            <div>
              Rp 2.500.000{" "}
              <span>
                <strike>Rp 3.500.000</strike>
              </span>
            </div>
          </div>

          <div className="circle">-50%</div>
        </div>
        <div className="products">
          <img src={one} />

          <div className="btm-txt">
            <div className="headin">Syltherine</div>
            <div>Stylish cafe chair</div>
            <div>Rp 2.500.000</div>
          </div>

          <div className="circle-one">New</div>
        </div>
      </div>


   

  
     
      <div className="wrap-foot-sect">
     <div className="foot-sect">
        <div>
        <img src={high} height="60px" width="60px"/>

        </div>
     <div>
      <div className="heading">
        High Quality

      </div>
      <div className="desc">
        created from top materials
      </div>
     </div>
      
      
      </div>
      <div className="foot-sect">
        <div>
        <img src={gua} height="60px" width="60px"/>

        </div>
     <div>
      <div className="heading">
      Warranty Protection

      </div>
      <div className="desc">
        created from top materials
      </div>
     </div>
      
      
      </div>
      <div className="foot-sect">

        <div>
        <img src={sip} height="60px" width="60px"/>

        </div>
     <div>
      <div className="heading">
      Free Shipping

      </div>
      <div className="desc">
        created from top materials
      </div>
     </div>
      
      
      </div>

       <div className="foot-sect">
        
        <div>
        <img src={sup} height="60px" width="60px"/>

        </div>
     <div>
      <div className="heading">
      24 / 7 Support

      </div>
      <div className="desc">
        created from top materials
      </div>
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
      <div className="right-rs container">2023 furino. All rights reverved</div>
        </div>
        
 
  );
};

export default Homeone;
