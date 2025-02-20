import { useLocalSearchParams } from "expo-router";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";

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
            </SafeAreaView>
        </LinearGradient>
    )
}

type HeaderProps = {
    id: string
}

function Header({ id }: HeaderProps) {
    const router = useRouter();

    // return <Text>dfsf</Text>
    return (
        <View style={{ borderColor: "yellow", borderWidth: 1 }}>
            <Text
                onPress={() => router.back()}
                style={{
                    color: "white",
                    fontSize: 15,
                    width: 40,
                    textAlign: "center",
                    borderColor: "grey",
                    borderWidth: 1
                }}
            >
                back
            </Text>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", textAlign: "center", paddingVertical: 25 }}>
                {id.toUpperCase()}
            </Text>
        </View>
    );
}
