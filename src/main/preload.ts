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

export type ElectronHandler = typeof electronHandler;
  