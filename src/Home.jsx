import React from "react";

import backg from "./images/wallback.svg";
import din from "./images/dinin.svg";
import bed from "./images/bedrom.svg";
import liv from "./images/living.svg";
import one from "./images/1.svg";
import two from "./images/2.svg";
import three from "./images/3.svg";
import four from "./images/4.svg";
import five from "./images/5.svg";
import six from "./images/6.svg";
import girl from "./images/girls.png";
import girlone from "./images/inner-rgt.svg";
// import rone from "./images/r1.svg";
// import rtwo from "./images/r2.svg";
// import rthree from "./images/r3.svg";
// import rfour from "./images/r4.svg";
// import rfive from "./images/r5.svg";
// import rsix from "./images/r6.svg";
// import rsev from "./images/r7.svg";
// import rten from "./images/r10.svg";
import fulimage from "./images/fullimage.svg"

const Home = () => {
  return (
    <div className="">
      <div className="img-setor container-fluid">
        {/* <img src={backg} width="100%" alt="wall background" /> */}
        <div className=" box-wrap-all">
           <div className="box-rgt">
          <div className="box-rgt-padn">
            <p className="newarr">New Arrival</p>
            <p className="newarr-one">Discover Our New Collection</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="box-btm">Buy Now</div>
          </div>
        </div>
        </div>
       
        
      </div>

    
        <div className="brows container">
          <p className="browse">Browse The Range</p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
          voluptatem.
        </div>
        <div className="phot container">
          <div>
            <div>
              <img src={din} alt="dining" width="381px" height="480px" />
            </div>

            <div className="txt-dsn">Dining</div>
          </div>

          <div>
            <div>
              <img src={bed} alt="bed"  width="381px" height="480px" />
            </div>

            <div className="txt-dsn">Living</div>
          </div>

          <div>
            <div>
              <img src={liv} alt="living" width="381px" height="480px" />
            </div>

            <div className="txt-dsn">Bedroom</div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="products-wrap container">
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

        {/* <div className="products-wrap">
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
        </div> */}
        <div className="show-btn-align">
          <div className="show-btn">Show More</div>
        </div>

        <div className="align-wrap container">
          <div className="rooms-wrapper">
            <div className="rooms">
              <p className="fify">50+ Beautiful rooms inspiration</p>
              <p className="fif">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
                praesentium. Modi aut sed fugiat molestias!
              </p>
              <div className="rooms-btn">Explore more</div>
            </div>
          </div>
          <div className="slider-sect">
            <img src={girl} height="200px" width="200px" />
            <img src={girlone} height="200px" width="200px" />
          </div>

        </div>
        
             {/* <div className=" sect-bottom-one container-fluid">
            <img src={fulimage}  />
          </div>  */}
           
       
          
         
        <hr />
        <div className="footer-sect">
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

export default Home;
