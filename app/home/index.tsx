import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

export default function EventsPage() {
    return (
        <LinearGradient
            colors={["#020202", "#0A0A0A"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1, alignItems: "center"}}>
                    <View style={style.title}>
                        <Text>dfsf</Text>
                    </View> 
                    <Text style={style.text}>Events Page</Text>
                    <View style={style.container} />
                </SafeAreaView>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: "#341539",
        alignItems: "center"
    },
    title: {
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        color: "white",
        fontSize: 30
    },
    text: {
        width: "70%",
        height: 50,
        color: "#EBD3F8"
    },
    container: {
        width: "70%",
        height: 50,
        borderColor: "#CBCBCB",
        borderWidth: 1
    }
})
