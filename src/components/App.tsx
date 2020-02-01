import React from "react";
import "./App.scss";
import FileInput from "./FileInput";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FileInput></FileInput>
        <p>it works!</p>
      </header>
    </div>
  );
};

export default App;
