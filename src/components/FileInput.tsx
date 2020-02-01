import React from "react";
import "./FileInput.scss";
import FileDrop from "react-file-drop";
import { AudioType } from "../lib/types";

const FileInput = () => {
  const handleDrop = (files: FileList | null, event: any) => {
    if (files == null) return;
    if (files.length !== 1) {
      alert("파일을 한개만 놓으세요.");
      return;
    }
    const file = files[0];
    const extension: string = file.name.split(".").pop()!;
    if (!Object.keys(AudioType).includes(extension)) {
      alert(".mp3, .wav 파일만 사용 가능합니다");
      return;
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
