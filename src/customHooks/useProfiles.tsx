import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const URL = "https://fendir.herokuapp.com";

const ProfilesContext = createContext<any>(null)

export const ProfilesProvider = ({ children }: any) => {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        fetchProfiles().then((res: any) => {
            let newProfiles = res.data.map((profile: any) => {
                return {
                    id: profile.to_id,
                    name: profile.username,
                    url: profile.docs
                }
            })
            setProfiles(newProfiles);
        })
    }, [])

    const fetchProfiles = () => {
        return axios.get(`${URL}/Showlist`, {
            headers: {
                auth: localStorage.getItem("user")!
            }
        })
    }

    return <ProfilesContext.Provider value={{ profiles, fetchProfiles }}>
        {children}
    </ProfilesContext.Provider>
}

export const useProfiles = () => {
    return useContext(ProfilesContext)
}