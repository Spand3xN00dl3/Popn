import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import { AuthContext, responseType } from "@/contexts/AuthContext";
import { Link, Redirect, useRouter } from "expo-router";
import Logo from "@/components/logo";
import SubmitButton from "@/components/submitButton";
import LinearGradient from "react-native-linear-gradient";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const auth = useContext(AuthContext);
    const router = useRouter();

    const goToTest = () => {
        router.navigate("/(test)");
    }

    if(auth && auth.authenticated) {
        return <Redirect href="/home" />;
    }

    return (
        <LinearGradient
            colors={["#020202", "#0A0A0A"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
                <SafeAreaView style={style.bg}>
                    <Logo />
                    <View style={style.container}>
                        <TextInput placeholder="Username" style={style.input} onChangeText={text => setUsername(text)} placeholderTextColor={"#605983"} />
                        <TextInput placeholder="Password" style={style.input} onChangeText={text => setPassword(text)} placeholderTextColor={"#605983"} />
                        <Text style={style.statusBar}>{status}</Text>
                        <SubmitButton text="Login" onClick={async () => {
                            if(auth) {
                                const res: responseType = await auth.logIn(username, password);
                                console.log(res);
                                if(res.approved) {
                                    auth.setAuthenticated(true);
                                } else {
                                    setStatus(res.message);
                                }
                            }
                            
                        }}/>
                        <Link href={"/(auth)/signup"} style={style.signUp}>
                            Sign Up
                        </Link>
                        {/* <Link href={"/(test)"} style={{ backgroundColor: "white" }}>
                            go test
                        </Link> */}
                    </View>
                </SafeAreaView>                
        </LinearGradient>
        
    )
}


const style = StyleSheet.create({
    bg: {
        flex: 1,
        // backgroundColor: "#352F44"
    },
    container: {
        width: "100%",
        height: "50%",
        alignItems: "center"
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
    },
    signUp: {
        width: "70%",
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#605983",
        marginTop: 10,
        fontSize: 18,
        color: "white",
        // alignItems: "center",
        // justifyContent: "center"
        textAlign: "center",
        paddingTop: "2.5%"
        // justifyContent: "center"
    },
    statusBar: {
        width: "70%",
        height: "auto",
        color: "red",
        fontSize: 15
    }
})
