import React, { ReactEventHandler } from "react";
import "./FileInput.scss";
import AudioDecoder from "../lib/AudioDecoder";
import FileDrop from "react-file-drop";

const FileInput = (props: { setAudio: (blob: Blob) => void }) => {
  const decoder = new AudioDecoder();

  const handleDrop = async (files: FileList | null, event: any) => {
    if (files == null) return;
    if (files.length !== 1) {
      alert("파일을 한개만 놓으세요.");
      return;
    }
    try {
      const audioBlob = await decoder.decode(files[0]);
      props.setAudio(audioBlob);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <FileDrop className="file-input" onDrop={handleDrop}>
      drop .mp3 here
      <div className="url-input-container">
        <input placeholder="..or enter youtube url here."></input>
        <button>enter</button>
      </div>
    </FileDrop>
  );
};

export default FileInput;
