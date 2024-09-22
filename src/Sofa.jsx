import React from "react";
import sofaone from "./images/sofa1.svg";
import sofatwo from "./images/sofa2.svg";
import sofathree from "./images/sofa3.svg";
import sofafour from "./images/sofa4.svg";
import bigsof from "./images/Asgaard sofa 3.svg";
import star from "./images/stars.svg";
import sofaleft from "./images/sofa-left.svg";
import sofaright from "./images/sofa-right.svg";
import one from "./images/1.svg";
import two from "./images/2.svg";
import three from "./images/3.svg";
import four from "./images/4.svg";
import five from "./images/5.svg";
import six from "./images/6.svg";
const Sofa = () => {
  return (
    <div className="">
      <div className="header">
        <div className="d-flex gap-3 container header-wrap">
          <div>Home</div>
          <div>
            <i class="fa-solid fa-greater-than"></i>
          </div>
          <div>Shop</div>
          <div>
            <i class="fa-solid fa-greater-than"></i>
          </div>
          <div className="border-rgt"></div>
          <div className="sofa-text">Asgaard sofa </div>
        </div>
      </div>

      <div className="d-flex btm-div-wrap gap-3 container">
        <div className="btm-div ">
          <img src={sofaone} />
          <img src={sofatwo} />
          <img src={sofathree} />
          <img src={sofafour} />
        </div>
        <div className="img-full">
          <img src={bigsof} />
        </div>
        <div>
          <div className="item-title">Asgaard sofa</div>
          <div className="item-price">Rs. 250,000.00</div>
          <div className="d-flex gap-2">
            <div className="stars">
              <img src={star} />
            </div>
            <div className="bord"></div>
            <div className="c-review">5 Customer Review</div>
          </div>
          <div className="item-desc">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </div>
          <div className="size-title">Size</div>
          <div className="size">
            <div className="l-edit">L</div>
            <div className="xledit">XL</div>
            <div className="xledit">XS</div>
          </div>
          <div>Color</div>
          <div className="d-flex gap-4 align-d">
            <div className="blue-clr"></div>
            <div className="black-clr"></div>
            <div className="yellow-clr"></div>
          </div>

          <div className="d-flex gap-3">
            <div className="l-one">
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
            <div className="l-one">Add to Cart</div>
            <div className="l-one">
              <div>+</div>
              <div>Compare</div>
            </div>
          </div>

          <hr />
          <div className="warp">
          <div className="d-flex gap-4">
            <div>SKU</div>
            <div>:</div>
            <div>SS001</div>
          </div>

         
            <div className="d-flex gap-4 ">
              <div>Category</div>
              <div>:</div>
              <div>Sofas</div>
            </div>
            <div className="d-flex gap-4">
              <div>Tags</div>
              <div>:</div>
              <div>Sofa,Chair, Home, Shop</div>
            </div>
            <div className="d-flex gap-4">
              <div>Share</div>
              <div>:</div>
              <div>
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <hr />

      <div className=" bottom-sty d-flex gap-5">
        <div className="head">Description</div>
        <div>Additional Information</div>
        <div>Reviews[5]</div>
      </div>
      <div className="text-wrap">
        <div className="text-wrap-one">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </div>
        <div className="text-wrap-one">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </div>
        <div className="d-flex gap-2">
          <div>
            <img src={sofaleft} />
          </div>
          <div>
            <img src={sofaright} />
          </div>
        </div>
      </div>
      <div className="r-pro">Related Products</div>

      <div className="products-wrap container">
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
      </div>

      <div className="show-align">
      <div className="show-btn">Show More</div>
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
    </div>
  );
};

export default Sofa;
