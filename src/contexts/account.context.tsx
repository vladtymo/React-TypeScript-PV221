import * as React from 'react';
import { createContext } from "react"

type AccountContent = {
    email: string | null,
    isAuth: Boolean,
    login: (email: string | null) => void,
    logout: () => void
}

export const AccountContext = createContext<AccountContent>({
    email: null,
    isAuth: false,
    login: (email: string | null) => { },
    logout: () => { }
});

type AccountProviderProps = {
    children: React.ReactNode;
};

export const AccountProvider = ({ children }: AccountProviderProps) => {
    const [email, setEmail] = React.useState<string | null>("");
    const [isAuth, setAuth] = React.useState<boolean>(false);

    const login = (email: string | null) => {
        setEmail(email);
        setAuth(true);
    };
    const logout = () => {
        setEmail(null);
        setAuth(false);
    };

    return <AccountContext.Provider value={{ email, isAuth, login, logout }}> {children} </AccountContext.Provider>;
};

export default AccountProvider;