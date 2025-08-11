import {View,StyleSheet, Text} from "react-native";

export default function Navigate() {
    return (
        <View style={styles.container}>
            <View style={styles.date}>
                <Text style={styles.text}>8 | 2025</Text>
            </View>
            <View style={styles.current}>

            </View>
            <View style={styles.menu}>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 200,
    },
});