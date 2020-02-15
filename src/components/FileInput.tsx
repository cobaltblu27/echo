import React from "react";
import "./FileInput.scss";
import { decodeAudio } from "../lib/audio";
import("rs-module").then(module => {
  module.greet();
});

const FileInput = (props: { setAudio: (blob: Blob) => void }) => {
  const handleDrop = async (files: FileList | null, event: any) => {
    if (files == null) return;
    if (files.length !== 1) {
      alert("파일을 한개만 놓으세요.");
      return;
    }
    try {
      const audioBlob = await decodeAudio(files[0]);
      props.setAudio(audioBlob);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    // <div className="file-input" onDrop={handleDrop}>
    <div className="file-input">
      drop .mp3 here
      <div className="url-input-container">
        <input placeholder="..or enter youtube url here."></input>
        <button>enter</button>
      </div>
    </div>
  );
};

export default FileInput;
