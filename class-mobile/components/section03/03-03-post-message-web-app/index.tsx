import { Button, SafeAreaView, StatusBar } from "react-native";
import WebView from "react-native-webview";

// const myUrl = "http://172.16.0.171:8081"; // 내 핸드폰
// const myUrl = "http://10.0.2.2:3000"; // 안드로이드 애뮬레이터
const myUrl = "http://127.0.0.1:3000"; // IOS 시뮬레이터

export default function PostMessageWebToApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <WebView
        source={{
          uri: `${myUrl}/section03/03-02-post-message-app-web`,
        }}
        onMessage={(event) => {
          if (!event.nativeEvent.data) return;

          alert(`web: ${event.nativeEvent.data}`);
        }}
      />
    </SafeAreaView>
  );
}
