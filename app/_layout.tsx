import { Redirect, Stack } from "expo-router";
import { AuthContext } from "@/contexts/AuthContext";
import { useState } from "react";
// import users from "@/backend/users.json"

const users: {[key: string]: string} = {};
users["user1"] = "password123"
users["User2"] = "Password"


export default function RootLayout() {
    const [authorized, setAuthorized] = useState(false);
    const [username, setUsername] = useState("");
    const logIn = (user: string, pass: string) => {
        if(user in users && users[user] === pass) {
            setAuthorized(true);
            return "success";   
        }

        return "failure";
    }

    const signUp = (user: string, pass: string) => {
        if(user in users){
            return "failure";
        }
        
        users[user] = pass;
        return "success";
    }

    const logOut = () => {
        setAuthorized(false);
    }

    // if (authorized) {
    //     return <Redirect href={"/(test)"} />

    // }


    return (
        <AuthContext.Provider value={{
            authenticated: authorized,
            username: username,
            setUsername: setUsername,
            logIn: logIn,
            signUp: signUp,
            logOut: logOut
        }}>
            <Stack>
                <Stack.Screen name="(auth)/index" options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="(auth)/signUp" options={{
                    headerShown: false
                }} />
                <Stack.Screen name="home" options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="clubs/[id]" options={{
                    headerShown: false,
                }} />
            </Stack>
        </AuthContext.Provider>
    );
}
