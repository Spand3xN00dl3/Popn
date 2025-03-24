import { Text, StyleSheet, View, Pressable } from "react-native";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Link, Redirect } from "expo-router";
// import React from "react";
import { InstagramLogo } from "@/components/logos";

const API_URL = `http://localhost:3000/test/mssqlclubs`;

export default function TestScreen() {
    const auth = useContext(AuthContext);

    // if(!auth.authenticated) {
    //     return <Redirect href={"/(auth)"} />;
    // }

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            // const json = await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <Text style={style.test}>test screen</Text>
            <InstagramLogo url={""} />
            <InstagramLogo url={"d"} />
            <Pressable
                style={{ width: 100, height: 25, borderColor: "black", borderWidth: 1 }}
                onPress={async () => {
                    fetchData();
                }}
            >
                <Text style={{ color: "black" }}>api test</Text>
            </Pressable>
            <Link style={style.test} href={"/(auth)"}>go back to login</Link>
        </>
    )
}

const style = StyleSheet.create({
    test: {
        margin: 40
    }
})
