import { Text, View, TextInput, StyleSheet, Pressable, ImageBackground, ScrollView, FlatList } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { BlurView } from "expo-blur"
// import ClubList from "@/components/clubList";
// import SearchBar from "@/components/searchBar";
// import { SearchBar } from "react-native-screens";
import { Data } from "@/backend/Data/clubData";


type ItemData = {
    name: string,
    description: string
}

type ItemProp = {
    item: ItemData,
}

export default function ClubsPage() {
    const render = ({item}: {item: ItemData}) => {
        return <ClubEntry item={item} />
    }
    // return (
    //     <SafeAreaView style={style.bg}>
    //         <LinearGradient
    //             colors= {['#0F0F0F', '#1A1A1A']}
    //             start={{ x: 1, y: 0 }}
    //             end={{ x: 0, y: 1}}
    //             style={style.gradient}>
    //                 {/* <Text style={{color: "red"}}>text</Text> */}
    //                 <SearchBar></SearchBar>
    //         </LinearGradient>
    //         <Text>d</Text>
    //     </SafeAreaView>
    // );

    // return (
    //     <SafeAreaView style={style.bg}>
    //         <View style={style.gradient}>
    //             <Text style={{ color: "red" }}>df</Text>
    //         </View>
    //     </SafeAreaView>
    // )

    return (
        <LinearGradient
            colors={["#020202", "#0A0A0A"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={style.gradient}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <FlatList 
                            data={Data}
                            renderItem={render}
                            // contentContainerStyle={}
                            ListHeaderComponent={<Header />}
                            stickyHeaderIndices={[0]}
                            // contentContainerStyle={{ gap: "5%" }}
                            // StickyHeaderComponent={Header}
                        />
                    </View>
                    
                </SafeAreaView>
        </LinearGradient>
    )
}

function ClubEntry({item}: ItemProp) {
    return (
        <View style={{ height: 150, alignItems: "center", justifyContent: "center", borderColor: "#0A0A0A", borderWidth: 0 }}>
            <View style={{ width: "95%", height: "90%", borderColor: "yellow", borderWidth: 0, alignItems: "center", justifyContent: "center", backgroundColor: "#2A2A2A", opacity: 0.8, borderRadius: 25 }}>
                <View style={{ width: "90%", height: 100, borderWidth: 1, backgroundColor: "#0E0E0E", borderRadius: 10, paddingHorizontal: 5 }}>
                    <Text style={{ textAlign: "center", color: "#888", paddingTop: 10, fontSize: 15, fontWeight: 600 }}>{item.name}</Text>
                    <Text style={{ textAlign: "center", color: "#BBB", paddingTop: 15 }}>{item.description}</Text>
                </View>
            </View>
        </View>
        
    )
}

function Header() {
    // return (
    //     <View style={style.container}>
    //         <Text style={style.title}>POPN</Text>
    //         <SearchBar />
    //         <OptionBar />
    //     </View>
    // )
    return (
        <BlurView intensity={20} tint={"regular"} style={style.header}>
            <View style={{ width: "100%", height: "100%", alignItems: "center",
                backgroundColor: "#0E0E0E", opacity: 0.8
            }}>
                <Text style={style.title}>POPN</Text>
                <SearchBar />
                <OptionBar />
            </View>
        </BlurView>
    )
}

function SearchBar() {
    const [search, setSearch] = useState("");
    return (
        <TextInput
            style={style.search}
            onChangeText={text => setSearch(text)}
            placeholder={"Search"}
            placeholderTextColor={"#605983"}
        />
    )
}

function OptionBar() {
    return (
        <ScrollView contentContainerStyle={{ alignItems: "center"}} horizontal={true}>
            <OptionToggleButton text="Popular"/>
            <OptionToggleButton text="Trending" /> 
            <OptionToggleButton text="Music" />
            <OptionToggleButton text="Academic" />
            <OptionToggleButton text="Sports" />
        </ScrollView>
    );
}

type TextProp = {
    text: string
}

function OptionToggleButton({ text }: TextProp) {
    const [toggled, setToggled] = useState(false);

    return (
        <Pressable onPress={() => setToggled(!toggled)} style={{
            width: 100,
            height: "55%",
            backgroundColor: "#1A1A1A",
            borderColor: "white",
            borderWidth: toggled ? 1 : 0,
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
    gradient: {
        flex: 1,
        // width: "100%",
        // height: "104.84%",
        // borderWidth: 1,
        // borderColor: "red"
    },
    header: {
        flex: 1,
        // width: "100%",
        // height: "25%",
        height: 150,
        // borderWidth: 1,
        // borderColor: "red",
        // justifyContent: "center",
        // alignItems: "center",
        // textAlignVertical: "center",
        // backgroundColor: "#020200"
        // backgroundColor: "#0E0E0E",
        // position: "absolute",
        zIndex: 1
    },
    title: {
        // flex: 1,
        height: "25%",
        color: "#E4C4E5",
        fontSize: 20,
        fontWeight: "bold",
        textAlignVertical: "center",
        borderColor: "red",
        // borderWidth: 1,
        paddingTop: "2%"
    },
    search: {
        // flex: 1,
        width: "90%",
        height: "30%",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#605983",
        // borderColor: "white",
        // backgroundColor: "#0E0E0E",
        paddingLeft: 25,
        fontSize: 15,
        color: "white",
    },
    options: {
        flex: 1,
        // width: "100%",
        height: "45%",
        borderColor: "white",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "row"
    }
})
