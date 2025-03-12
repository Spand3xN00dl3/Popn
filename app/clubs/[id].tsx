import { useLocalSearchParams } from "expo-router";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";

export default function ClubProfilePage() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    return (
        <LinearGradient
            colors={["#020202", "#1A1A1A"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                {/* <Text style={{color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{id.toString()}</Text> */}
                {/* <View style={{ width: }}> */}
    
                {/* </View> */}
                <Header id={String(id)} />
                {/* <Divider /> */}
                {/* <ClubInfo /> */}
                <View>
                    <AnnouncementItem />
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

function Divider() {
    return (
        <View style={{ alignItems: "center", marginVertical: 10 }}>
            <View style={{ width: 300, borderColor: "grey", borderWidth: 1 }} />
        </View>
    )
}

type HeaderProps = {
    id: string
}

function Header({ id }: HeaderProps) {
    const router = useRouter();

    // return <Text>dfsf</Text>
    return (
        <View style={{ height: "40%", backgroundColor: "#202020", borderColor: "#605983", borderWidth: 0, borderBottomWidth: 2 }}>
            <View style={{ height: "10%", borderColor: "white", borderWidth: 0 }}>
                <Text
                    onPress={() => router.back()}
                    style={{
                        color: "white", 
                        fontSize: 15,
                        width: 40,
                        textAlign: "center",
                        borderColor: "#605983",
                        borderWidth: 1
                    }}
                >
                    back
                </Text>
            </View>
            <View style={{ height: "20%", borderColor: "blue", borderWidth: 0 }} />
            <View style={{ height: "30%", flexDirection: "row", borderColor: "red", borderWidth: 0 }}>
                <View style={{ width: "10%" }} />
                <Icon />
                <View style={{ width: "10%" }} />
                <Text style={{ width: "50%", color: "white", fontSize: 25, fontWeight: "bold", textAlign: "center", paddingVertical: 25 }}>
                    {id ? id.toUpperCase() : "error"}
                </Text>
            </View>
            <View style={{ height: "15%", flexDirection: "row", alignItems: "center", borderColor: "yellow", borderWidth: 0 }}>
                <View style={{ width: "10%" }} />
                <View style={{ width: "40%", gap: "5"}}>
                    <Text style={{ color: "white" }}>Email: </Text>
                    <Text style={{ color: "white" }}>Phone: </Text>
                </View>
                <View style={{ width: "50%", borderColor: "white", borderWidth: 0, justifyContent: "center" }}>
                    <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Social Media Links</Text>
                </View>
            </View>
            <View style={{ height: "5%" }} />
            <View style={{ height: "20%", paddingHorizontal: "2.5%", borderColor: "orange", borderWidth: 0 }}>
                <Text style={{ color: "white" }}>Description: Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat iaculis ipsum viverra, lacus venenatis sagittis per.</Text>
            </View>
        </View>
    );
}

type IconProps = {
    size?: number
}

function Icon({ size=75 }: IconProps) {
    return (
        <View style={{ width: size, height: size, borderRadius: "50%", justifyContent: "center", borderColor: "#605983", borderWidth: 1 }}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 12 }}>
                Icon
            </Text>
        </View>
    );
}

function AnnouncementItem() {
    return (
        <View style={{ width: "100%", height: 200, justifyContent: "center", alignItems: "center", borderColor: "white", borderWidth: 1 }}>
            <View style={{ width: "90%", height: 150, backgroundColor: "#202020", borderColor: "#605983", borderWidth: 1, borderRadius: 10 }}>

            </View>
        </View>
    )
}
