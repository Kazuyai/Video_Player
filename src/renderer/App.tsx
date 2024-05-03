import { useEffect, useState } from "react";
import Router from "renderer/Router";

declare global {
  interface Window {
    electronAPI: {
      openFile: (callback: (filePath: string) => void) => void;
    }
  }
}

const App = () => {
  const [videoSrc, setVideoSrc] = useState<string>('');

  useEffect(() => {
    window.electronAPI.openFile((filePath: string) => {
      console.log(filePath);
    });
  }, []);

  return (
    <div>
      <p>Video Player</p>
      <video src={videoSrc} controls autoPlay />
      <Router />
    </div>
  );
};

export default App;
