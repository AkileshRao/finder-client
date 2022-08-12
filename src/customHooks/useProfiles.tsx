import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoader } from "./useLoader";
const URL = "https://fendir.herokuapp.com";

const ProfilesContext = createContext<any>(null)

export const ProfilesProvider = ({ children }: any) => {
    const [profiles, setProfiles] = useState([])
    const { loading, setLoading } = useLoader()!;

    const fetchProfiles = () => {
        setLoading(true)
        axios.get(`${URL}/Showlist`, {
            headers: {
                auth: localStorage.getItem("user")!
            }
        }).then((res: any) => {
            setLoading(false)
            let newProfiles = res.data.map((profile: any) => {
                return {
                    id: profile.to_id,
                    name: profile.username,
                    url: profile.docs
                }
            })
            setProfiles(newProfiles);
        }).catch(err => {
            setLoading(false)
            console.log(err);
        })
    }

    return <ProfilesContext.Provider value={{ profiles, setProfiles, fetchProfiles }}>
        {children}
    </ProfilesContext.Provider>
}

export const useProfiles = () => {
    return useContext(ProfilesContext)
}