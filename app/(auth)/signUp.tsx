import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function SignUp() {
    return (
        <LinearGradient
            colors={["#020202", "#0E0E0E"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
                <SafeAreaView>
                    <Link href={"/"} style={{ color: "white", borderColor: "white", borderWidth: 0 }}>Back</Link>
                    <View style={{ height: 300, justifyContent: "center", borderColor: "red", borderWidth: 0}}>
                        <Text style={style.title}>POPN</Text>
                    </View>
                    <View style={{ height: 200, borderColor: "yellow", borderWidth: 0, alignItems: "center" }}>
                        <TextInput placeholder="Username" style={style.input} placeholderTextColor={"#605983"} />
                        <TextInput placeholder="Password" style={style.input} placeholderTextColor={"#605983"} />
                    </View>
                    <ToggleButton text="Basketball" />
                </SafeAreaView>
        </LinearGradient>
    )
}

type TextProp = {
    text: string
}

function ToggleButton({ text }: TextProp) {
    const [toggled, setToggled] = useState(false);

    return (
        <Pressable onPress={() => setToggled(!toggled)} style={{
            width: 100,
            height: 50,
            backgroundColor: "#1A1A1A",
            // borderColor: "white",
            borderColor: toggled ? "white" : "#605983",
            // borderWidth: toggled ? 1 : 0,
            borderWidth: 1,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20
        }}>
            <Text style={{ color: "white" }}>{text}</Text>
        </Pressable>
    )
}


const style = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        width: "70%",
        height: 45,
        // borderColor: "#444",
        borderColor: "#605983",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 25,
        // backgroundColor: "#333",
        backgroundColor: "#0E0E0E",
        // color: "#666699",
        color: "white",
        fontSize: 15
    }
})
