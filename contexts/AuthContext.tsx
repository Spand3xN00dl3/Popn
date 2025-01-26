import { createContext } from "react";

export const AuthContext = createContext<{
    authenticated: boolean,
    username: string,
    setUsername: (user: string) => void,
    logIn: (user: string, pass: string) => string,
    signUp: (user: string, pass: string) => string,
    logOut: () => void
}>({
    authenticated: false,
    username: "",
    setUsername: (user: string) => null,
    logIn: (user: string, pass: string) => "",
    signUp: (user: string, pass: string) => "",
    logOut: () => null
});
