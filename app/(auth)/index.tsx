import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Redirect } from "expo-router";
import Logo from "@/components/logo";
import SubmitButton from "@/components/submitButton";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const auth = useContext(AuthContext);

    if(auth.authenticated) {
        return <Redirect href="/home" />;
    }

    return (
        <SafeAreaView style={style.bg}>
            <Logo />
            <View style={style.container}>
                <TextInput placeholder="username" style={style.input} onChangeText={text => setUsername(text)} />
                <TextInput placeholder="password" style={style.input} onChangeText={text => setPassword(text)} />
                <SubmitButton text="Login" onClick={() => {
                    const res: string = auth.logIn(username, password);

                    if(res === "failed") {
                        setStatus("Incorrect Username or Password");
                    }
                }}/>
            </View>
            <Text style={style.statusBar}>{status}</Text>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: "#352F44"
    },
    container: {
        width: "100%",
        height: "50%",
        alignItems: "center"
    },
    input: {
        width: "70%",
        height: 45,
        borderColor: "#444",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 25,
        backgroundColor: "#333",
        color: "#666699",
        fontSize: 18
    },
    statusBar: {
        width: "70%",
        height: "auto",
        color: "red",
        fontSize: 15
    }
})
