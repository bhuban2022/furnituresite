import "./App.css";


import {Routes,Route} from "react-router-dom"
import { NavBar } from "./NavBar";
import { Form } from "react-router-dom";
import Home from "./Home";
import Home1 from "./Homeone";
import Homeone from "./Homeone";
import Sofa from "./Sofa";
import SofaOne from "./Sofaone";
function App() {
  return (
    <div className="App">
      
      
     <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/page" element={<Homeone/>}/>
      <Route path="/sofa" element={<Sofa/>}/>
      <Route path="/sofaone" element={<SofaOne/>}/>

      
      </Routes>
       
      <div>

      </div>
    </div>
  );
}

export default App;
