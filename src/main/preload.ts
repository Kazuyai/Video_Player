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

contextBridge.exposeInMainWorld("electron", electronHandler);

contextBridge.exposeInMainWorld('electronAPI', {
    openFile: (callback: (filePath: string) => void) => ipcRenderer.on('open_file', (_event, filePath) => callback(filePath))
});


export type ElectronHandler = typeof electronHandler;
  