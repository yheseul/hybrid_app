import { useRef } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

// const myUrl = "http://172.16.0.171:8081"; // 내 핸드폰
// const myUrl = "http://10.0.2.2:3000"; // 안드로이드 애뮬레이터
const myUrl = "http://127.0.0.1:3000"; // IOS 시뮬레이터

export default function PostMessageDeviceApi() {
  const webViewRef = useRef<WebView>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <WebView
        ref={webViewRef}
        source={{ uri: `${myUrl}/section03/03-04-post-message-device-api` }}
        onMessage={(event) => {
          if (!event.nativeEvent.data) return;
          const request = JSON.parse(event.nativeEvent.data);
          console.log(request);
          switch (request.query) {
            case "fetchDeviceSystemForAppSet":
              {
                webViewRef.current?.postMessage(
                  JSON.stringify({
                    fetchDeviceSystemForAppSet: { appVersion: "v1.0" }, // expo-constants 라이브러리 설치하면 조회 가능
                  })
                );
              }
              break;
            case "fetchDeviceSystemForPlatformSet":
              {
                webViewRef.current?.postMessage(
                  JSON.stringify({
                    fetchDeviceSystemForPlatformSet: { modelName: "iPhone 17" }, // expo-device 라이브러리 설치하면 조회 가능
                  })
                );
              }
              break;
            case "fetchDeviceSystemForLocationLatLngSet":
              {
                webViewRef.current?.postMessage(
                  JSON.stringify({
                    fetchDeviceSystemForLocationLatLngSet: {
                      lat: 37, // expo-location 라이브러리 설치하면 조회 가능
                      lng: 128,
                    },
                  })
                );
              }
              break;
            default:
              break;
          }
        }}
      />
    </SafeAreaView>
  );
}
