"use client";

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

export default function PostMessageWebToApp() {
  const onClickButton = () => {
    window.ReactNativeWebView.postMessage("apple");
  };

  return <button onClick={onClickButton}>app에 데이터 줌</button>;
}
