"use client";

import { useEffect } from "react";

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

export default function PostMessageDeviceApi() {
  useEffect(() => {
    // 1. 안드로이드에서 수신 대기
    document.addEventListener("message", (message: any) => {
      alert(`App에서 보내준 데이터:  ${message.data}`);
    });

    //  IOS에서 수신 대기
    window.addEventListener("message", (message: any) => {
      alert(`App에서 보내준 데이터:  ${message.data}`);
    });
  }, []);

  // API 요청하는 기능들
  const onClickSystemVersion = () => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ query: "fetchDeviceSystemForAppSet" })
    );
  };

  const onClickSystemPlatform = () => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ query: "fetchDeviceSystemForPlatformSet" })
    );
  };

  const onClickLocationLatLng = () => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ query: "fetchDeviceSystemForLocationLatLngSet" })
    );
  };

  return (
    <>
      <button onClick={onClickSystemVersion}>
        app아 내 핸드폰 버전 정보 알려줘
      </button>
      <button onClick={onClickSystemPlatform}>
        app아 내 핸드폰 기종 정보 알려줘
      </button>
      <button onClick={onClickLocationLatLng}>
        app아 내 핸드폰 위치 정보 알려줘
      </button>
    </>
  );
}
