import { useEffect, useRef, useState } from "react";
import Router from "renderer/Router";

declare global {
  interface Window {
    electronAPI: {
      openFile: (callback: (filePath: string) => void) => void;
    }
  }
}

const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.electronAPI.openFile((filePath: string) => {
      console.log(filePath);
      if (videoRef.current) {
        videoRef.current.src = filePath;
      }
    });
  }, []);

  return (
    <div>
      <p>Video Player</p>
      <video ref={videoRef} controls autoPlay />
      <Router />
    </div>
  );
};

export default App;
