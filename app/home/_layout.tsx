import { Tabs } from "expo-router";

export default function HomeLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="clubs" options={{
                title: "Clubs",
                headerShown: false
            }} />
            <Tabs.Screen name="index" options={{
                title: "Home",
                headerShown: false
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                headerShown: false
            }} />
        </Tabs>
    )
}
