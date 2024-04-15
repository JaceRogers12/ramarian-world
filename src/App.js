import './App.css';
import Header from "./Components/Header.js";
import Navigation from "./Components/Navigation.js";
import Content from "./Components/Content.js";
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
          <Route path="/" element={<Content information={"Home"} />} />
          <Route path="locations" element={<Content information={"Locations"} />} />
          <Route path="magic" element={<Content information={"Magic"} />} />
          <Route path="races" element={<Content information={"Races"} />} />
          <Route path="creatures" element={<Content information={"Creatures"} />} />
          <Route path="history" element={<Content information={"History"} />} />
          <Route path="stories" element={<Content information={"Stories"} />} />
          <Route path="game" element={<Content information={"Game"} />} />
          <Route path="other" element={<Content information={"Other"} />} /> 
        </Routes>
      </div>
      

      <Footer />
    </div>
  );
}

export default App;
