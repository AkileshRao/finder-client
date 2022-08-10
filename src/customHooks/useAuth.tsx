import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "./useToast";
const URL = "https://fendir.herokuapp.com";

const AuthContext = createContext<any | null>(null);

export const AuthProvider = ({ children }: any) => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if (localStorage.getItem("user")) {
            return true
        }
        return false
    })

    const login = (mode: "LOGIN" | "REGISTER", username: string, password: string, role: string) => {
        let payload: any = { username, password }
        if (mode == "REGISTER") payload["role"] = role
        return axios.post(`${URL}/${mode == "LOGIN" ? "generateToken" : "createUser"}`, payload)
    }

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false)
        navigate("/")
    }

    return <AuthContext.Provider value={{ login, logout, isLoggedIn, setIsLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}