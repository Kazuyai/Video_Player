import {
    contextBridge,
    ipcRenderer,
} from "electron";

// レンダラープロセスとメインプロセスの通信はこちらで定義する
const electronHandler = {
    test: {
        sendTest: (testMsg: string) => {
        ipcRenderer.send("test-msg", [testMsg]);
        },
    },
};

contextBridge.exposeInMainWorld('electronAPI', {
    openFile: (url : string) => ipcRenderer.send('open-file', url),
    sendFile: (callback: (url: string) => void) => ipcRenderer.on('send-file', (_event, url) => callback(url))
});

contextBridge.exposeInMainWorld("electron", electronHandler);


export type ElectronHandler = typeof electronHandler;
  