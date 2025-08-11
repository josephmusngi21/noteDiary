import { Text, View } from "react-native";
import Main from '../components/pages/Main/Main'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Main />
    </View>
  );
}
