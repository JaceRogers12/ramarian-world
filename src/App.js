import './App.css';
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";
import Navigation from "./Components/Navigation.js";

function App() {

  return (
    <div className="App" >
      <Header />
      <div className="main" >
        <Navigation />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
