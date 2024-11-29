import { WebviewLog } from "@/commons/libraries/03-01-webview-log";

export default function WebviewLog() {
  const onClick = () => {
    console.log("웹뷰입니다.");
    
    WebviewLog("웹뷰입니다");
  };

  return <button onClick={onClick}>버튼 클릭하기</button>;
}
