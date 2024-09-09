import "./App.css";


import {Routes,Route} from "react-router-dom"
import { NavBar } from "./NavBar";
import { Form } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      
      
     <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>

      
      </Routes>
       
      <div>

      </div>
    </div>
  );
}

export default App;
