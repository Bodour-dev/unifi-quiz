import React from "react";
import "./App.css";
import StolenBikesList from "./pages/StolenBikesList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StolenBikesList />
    </div>
  );
}

export default App;
