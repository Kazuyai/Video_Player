import { ipcRenderer } from "electron";
import { useEffect, useRef, useState } from "react";
import Router from "renderer/Router";
import { Video, Settings, Timeline } from "renderer/components";
import "./App.css";

declare global {
  interface Window {
    electronAPI: {
      openFile: (url : string) => void;
      sendFile: (callback: (url: string) => void) => void;
    }
  }
}

const App = () => {
  
  const [videoSrc, setVideoSrc] = useState<string>("");
  
  /*const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (window.electronAPI && typeof window.electronAPI.sendFile === 'function') {
        window.electronAPI.sendFile((url: string) => {
          if (!videoRef.current) return; 
          videoRef.current.src = url;
        });
    } else {
        console.error('window.electronAPI.sendFile is not a function');
    }
  }, []);*/
  // window.electronAPI.onReply((e : any, arg : any) => {
  //   console.log(arg);
  //   if(!videoRef.current) return;
  //   videoRef.current.src = arg;
  // });

  // const setVideoSource = (src : string) => {
  //   if (!videoRef.current) return;
  //   videoRef.current.src = src;
  // }

  // // グローバルスコープに関数を公開
  // window.setVideoSource = setVideoSource;

  // ipcRenderer.on("send-url", (_event, url : string) => {
  //   if (videoRef.current) {
  //     videoRef.current.src = url;
  //   }
  // });

  // useEffect(() => {
  //   window.electronAPI.openFile((filePath: string) => {
  //     console.log(filePath);
  //     if (videoRef.current) {
  //       videoRef.current.src = filePath;
  //     }
  //   });
  // }, []);
  

  return (
    <div>
      {/* <video ref={videoRef} controls autoPlay />
      <button 
        onClick={() => {
          window.electronAPI.openFile("aaa");
        }}
      >---------------</button> */}
      {/* <Router /> */}
      <div className="up">
        <Video
          videoSrc={videoSrc}
        />
        <Settings 
          setVideoSrc={setVideoSrc}
        />
      </div>
      <Timeline />
    </div>
  );
};

export default App;
