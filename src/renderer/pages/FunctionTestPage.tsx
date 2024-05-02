import { useState } from "react";

const FunctionTestPage = () => {
  const sendTestMsg = () => {
    window.electron.test.sendTest("this is testMessage");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "10px",
      }}
    >
      <h1>機能テストページ</h1>
      <button onClick={sendTestMsg}>testMsg呼び出し</button>
    </div>
  );
};

export default FunctionTestPage;
