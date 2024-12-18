import { SafeAreaView, StatusBar } from "react-native";
import WebView from "react-native-webview";

export default function WebViewNext() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <WebView
        source={{
          // 1. [내 핸드폰]
          //    내 핸드폰에서 연결된 내 컴퓨터 => QR코드 아래에 나오는 IP 주소
          // uri: "http://172.16.0.171:8081/section01/01-04-webview-next"

          // 2. [안드로이드 애뮬레이터]
          //    안드로이드 기계에서 자기 자신 => 10.0.2.2 
          // uri: "http://10.0.2.2 :3000/section01/01-04-webview-next"

          //  3. [IOS 시뮬레이터]
          //    IOS 기계에서 자기 자신 => 127.0.0.1
          uri: "http://127.0.0.1:3000/section01/01-04-webview-next"

        }}
      />
    </SafeAreaView>
  );
}
