import './App.css';
import Header from "./Components/Header.js";
import Navigation from "./Components/Navigation.js";
import Home from "./Components/Home.js";
import Locations from "./Components/Locations.js";
import Footer from "./Components/Footer.js";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App" >
      <Header />
      <div className="main" >
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="locations" element={<Locations />} />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
      

      <Footer />
    </div>
  );
}

export default App;
