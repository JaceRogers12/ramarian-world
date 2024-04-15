import './App.css';
import React, {useState} from "react";
import Header from "./Components/Header.js";
import Navigation from "./Components/Navigation.js";
import Content from "./Components/Content.js";
import Footer from "./Components/Footer.js";
import {information} from "./Information.js";
import {Routes, Route} from "react-router-dom";

function App() {
  const [topic, setTopic] = useState("Main");

  const routeChange = () => {
    setTopic("Main")
  }
  const topicChange = (event) => {
    setTopic(event.target.value)
  }

  return (
    <div className="App" >
      <Header />
      <div className="main" >
        <Navigation routeChange={routeChange} />
        <Routes>
          {information.Routes.map((route, i)=> {
            return <Route path={route == "Home"? "/" : route.toLowerCase()} key={i} 
              element={<Content info={route} topic={topic} topicChange={topicChange} />}
            />
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
