import React from 'react'
import logo from "./images/logo.svg";
import qsn from "./images/qsn.svg";
import search from "./images/search.svg";
import lovelogo from "./images/love.svg";
import cart from "./images/cart.svg";

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg backg">
        <div class="container">
          <img src={logo} alt="logo" /> <span className="furniro mx-2">Furniro</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav gap-3 me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <ul class="navbar-nav gap-5 mb-2 mb-lg-0  rgt-nav">
              <li class="nav-item ">
                <img src={qsn} alt="right logo" />
              </li>
              <li class="nav-item">
                <img src={search} alt="right logo2" />
              </li>
              <li class="nav-item">
                <img src={lovelogo} alt="right logo3" />
              </li>
              <li class="nav-item">
                <img src={cart} alt="right logo4" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

