import { Button, SafeAreaView, StatusBar } from "react-native";
import WebView from "react-native-webview";

// const myUrl = "http://172.16.0.171:8081"; // 내 핸드폰
// const myUrl = "http://10.0.2.2:3000"; // 안드로이드 애뮬레이터
const myUrl = "http://127.0.0.1:3000"; // IOS 시뮬레이터

export default function PostMessageAppToWeb() {
  const onPressButton = () => {
    console.log("모바일뷰입니다.");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <WebView
        source={{
          uri: `${myUrl}/section02/02-05-layout-footer-contents-short-long`,
        }}
      />
      <Button onPress={onPressButton} title="모바일 로그 확인" />
    </SafeAreaView>
  );
}
