import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Title1 from "./components/title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <Title1 text={"BOOTCAMP Batch 8: Experiment with REACTJS"} />
          <Navbar />
        </div>
        <h1 className="column">This is React</h1>
      </header>
    </div>
  );
}

export default App;
