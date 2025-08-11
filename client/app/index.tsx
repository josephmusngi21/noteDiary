import { View } from "react-native";
// import Main from '../components/pages/Main/Main';
import Navigate from "../components/pages/Navigate/Navigate";

export default function Index() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navigate dateInt={currentDay} yearInt={currentYear} />
    </View>
  );
}
