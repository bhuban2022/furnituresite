import "./App.css";

import { Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Form } from "react-router-dom";
import Home from "./Home";
import Home1 from "./Homeone";
import Homeone from "./Homeone";
import Sofa from "./Sofa";
import SofaOne from "./Sofaone";
import ProductComparison from "./ProductComparison";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import Contact from "./Contact";
import Blog from "./Blog";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Homeone />} />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/sofaone" element={<SofaOne />} />
        <Route path="/products" element={<ProductComparison />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chckout" element={<CheckOut/>}/>
        <Route path="/con" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>

      </Routes>

      <div></div>
    </div>
  );
}

export default App;
