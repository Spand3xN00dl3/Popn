import { Text, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Link, Redirect } from "expo-router";
import React from "react";

export default function TestScreen() {
    const auth = useContext(AuthContext);

    if(!auth.authenticated) {
        return <Redirect href={"/(auth)"} />;
    }

    return (
        <>
            <Text style={style.test}>test screen</Text>
            <Link style={style.test} href={"/(auth)"}>go back to login</Link>
        </>
    )
}

const style = StyleSheet.create({
    test: {
        margin: 40
    }
})
