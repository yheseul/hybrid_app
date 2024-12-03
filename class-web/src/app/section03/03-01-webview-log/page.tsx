"use client";

import { webviewLog } from "@/commons/libraries/03-01-webview-log";

export default function WebviewLog() {
  const onClick = () => {
    fetch("https://koreanjson.com/posts/1");

    console.log("웹뷰입니다. - 크롬 인스펙트 확인"); // 크롬 인스펙트 확인

    webviewLog("웹뷰입니다, - Next 서버 확인"); // Next 서버 확인
  };

  return <button onClick={onClick}>버튼 클릭하기</button>;
}
