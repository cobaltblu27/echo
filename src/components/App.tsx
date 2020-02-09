import React, { useState } from "react";
import "./App.scss";
import FileInput from "./FileInput";
import AudioComponent from "./AudioComponent";

const App = () => {
  const [audioBlob, setAudioBlob] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <FileInput setAudio={setAudioBlob}></FileInput>
        {audioBlob == null ? (
          undefined
        ) : (
          <AudioComponent blob={audioBlob}></AudioComponent>
        )}
        <p>it works!</p>
      </header>
    </div>
  );
};

export default App;
