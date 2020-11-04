import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBarra from "./components/navBar";
import Routes from "./components/routes";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="App" id="home">
        <NavBarra />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
