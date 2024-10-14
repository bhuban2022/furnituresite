import React from "react";
import star from "./images/stars.svg";
import bigsof from "./images/Asgaard sofa 3.svg";
import sofaset from "./images/sofaset.svg";
import cdown from "./images/caretdown.svg";
import high from "./images/hq.svg";
import gua from "./images/guarantee.svg";
import sup from "./images/support.svg";
import sip from "./images/shipping.svg";
import houselogo from "./images/house-logo.svg";

const ProductComparison = () => {
  return (
    <div>
      <div className="backgrou">
        <div>
          <img src={houselogo} />
        </div>
        <div className="titles">Product Comparison</div>
        <div className="d-flex gap-3">
          <div>Home</div>
          <div>
            <i class="fa-solid fa-greater-than"></i>
          </div>
          <div>Comparison</div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-flex gap-3 ">
          <div>
            <div className="titleproduct">
              Go to Product page for more Products
            </div>
            <div className="viewm">View More</div>
          </div>

          <div className="">
            <div className="bckng">
              <img src={bigsof} height="90px" />
            </div>

            <div className="item-title">Asgaard sofa</div>
            <div className="item-price">Rs. 250,000.00</div>
            <div className="d-flex gap-2">
              <div className="stars">
                <img src={star} />
              </div>
              <div className="bord"></div>
              <div className="c-review">5 Customer Review</div>
            </div>
          </div>

          {/* 2 */}

          <div>
            <div className="bckng">
              <img src={sofaset} height="142px" width="239px" />
            </div>

            <div>
              <div className="item-title">Outdoor Sofa Set</div>
              <div className="item-price">Rs. 224,000.00</div>
              <div className="d-flex gap-2">
                <div className="stars">
                  <img src={star} />
                </div>
                <div className="bord"></div>
                <div className="c-review">5 Customer Review</div>
              </div>
            </div>
          </div>

          <div>
            <div>Add A Product</div>
            <div className="d-flex c-product">
              <div>Choose a Product</div>
              <div>
                <img src={cdown} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        General
        <div className="d-flex gap-2">
          <div>
            <ul className="gen-1">
              <li>Sales Package</li>
              <li>Model Number</li>
              <li>Secondary Material</li>
              <li>Configuration</li>
              <li>Upholstery Material</li>
              <li>Upholstery Color</li>
            </ul>
          </div>
          <div>
            <ul className="gen-1">
              <li>1 sectional sofa</li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>

          <div>
            <ul className="gen-1">
              <li>1 Three Seater, 2 Single Seater</li>
              <li>DTUBLIGRBL568</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
        </div>
        <div>
          <div>Products</div>
          <div className="d-flex gap-2">
            <div>
              <div className="gen-1">
                <li>Filling Material</li>
                <li>Finish Type</li>
                <li>Adjustable Headrest</li>
                <li>Maximum Load Capacity</li>
                <li>Origin of Manufacture</li> <li>Upholstery Color</li>
              </div>
            </div>
            <div>
              <div className="gen-1">
                <li>Foam</li>
                <li>Bright Grey & Lion</li>
                <li>No</li>
                <li>280 KG</li>
                <li>India</li>
              </div>
            </div>

            <div>
              <div className="gen-1">
                <li>Matte</li>
                <li>Bright Grey & Lion</li>
                <li>yes</li>
                <li>300 KG</li>
                <li>India</li>
              </div>
            </div>
          </div>
        </div>
        <div>Dimensions</div>
        <div className="d-flex gap-2">
          <div>
            <ul className="gen-1">
              <li>Width</li>
              <li>Height</li>
              <li>Depth</li>
              <li>Weight</li>
              <li>Seat Height</li>
              <li>Leg Height</li>
            </ul>
          </div>
          <div>
            <ul className="gen-1">
              <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>45 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>
          </div>

          <div>
            <ul className="gen-1">
              <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>45 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>
          </div>
        </div>
        <div>Warranty</div>
        <div className="d-flex gap-2 mb-3">
          <div>
            <div className="gen-1">
              <li>Warranty Summary</li>
              <li>Warranty Service Type</li>
              <li>Covered in Warranty</li>
              <li>Not Covered in Warranty</li>
              <li>Domestic Warranty</li>
            </div>
          </div>
          <div>
            <div className="gen-1 para-wid">
              <li>1 Year Manufacturing Warranty</li>
              <li>
                For Warranty Claims or Any Product Related Issues Please Email
                at operations@trevifurniture.com
              </li>
              <li>Warranty Against Manufacturing Defect</li>
              <li>
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </li>
              <li>1 Year</li>
            </div>

            <div className="box-btm-new">Add to Cart</div>
          </div>

          <div>
            <div className="gen-1 para-wid">
              <li>1.2 Year Manufacturing Warranty</li>
              <li>
                For Warranty Claims or Any Product Related Issues Please Email
                at support@xyz.com
              </li>
              <li>
                Warranty of the product is limited to manufacturing defects
                only.
              </li>
              <li>
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </li>
              <li>3 Months</li>
            </div>

            <div className="box-btm-new">Add to Cart</div>
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
    </div>
  );
};

export default ProductComparison;
