import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ReactNativeTags() {
  const onPressButton = () => {
    alert("button!!");
  };

  const onChangePassword = (text: string) => {
    console.log(text);
  };

  const onScrollData = () => {
    console.log("scroll");
  };

  return (
    <View>
      {/* 1. 버튼 */}
      <Button title="button" onPress={onPressButton} />

      {/* 2. 투명한 버튼 */}
      <TouchableOpacity onPress={onPressButton}>
        <Text>button</Text>
      </TouchableOpacity>

      {/* 3. 인풋 */}
      <TextInput
        onChangeText={onChangePassword}
        secureTextEntry={true}
        style={styles.input}
      />

      {/* 4. 무한스크롤 */}
      <FlatList
        data={[
          { number: 1, title: "title1" },
          { number: 2, title: "title2" },
          { number: 3, title: "title3" },
          { number: 4, title: "title4" },
          { number: 5, title: "title5" },
          { number: 6, title: "title6" },
          { number: 7, title: "title7" },
          { number: 8, title: "title8" },
          { number: 9, title: "title9" },
          { number: 10, title: "title10" },
        ]}
        renderItem={({ item }) => (
          <Text>
            number: {item.number}, title: {item.title}
          </Text>
        )}
        onScroll={onScrollData}
        style={styles.boardList}
      />

      {/* 5. 안드로이드 노치 */}
      <StatusBar
        translucent={false} // 노치에 태그들 겹치기(true, false)
        barStyle="dark-content" // 노치 글자색(dark-content, light-content)
        backgroundColor="black" // 노치 배경색(transparent, yellow, ...)
      />

      {/* 6. IOS 노치 */}
      <SafeAreaView style={{ backgroundColor: "black" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "red",
  },

  boardList: {
    height: 100,
    backgroundColor: "yellow",
    overflow: "scroll",
  },
});
