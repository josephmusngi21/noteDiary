import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Navigate({ dateInt, yearInt }) {
  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text style={styles.text}>
          {dateInt} | {yearInt}
        </Text>
      </View>
      <View style={styles.current}>
        <Text>O</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 200,
    justifyContent: "space-between",
  },
  date: {},
  current: {},
  menu: { display: "flex", flexDirection: "row" },
  text: {},
});
