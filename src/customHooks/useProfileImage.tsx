import { createContext, useContext, useEffect, useState } from "react";

const ProfileImageContext = createContext<any>(null)

export const ProfileImageProvider = ({ children }: any) => {
    const [link, setLink] = useState(() => localStorage.getItem("link"))

    useEffect(() => {
        const currentImageURL = localStorage.getItem("link")
        localStorage.setItem("link", currentImageURL)
    }, [link])

    const updateLink = (linkName: string, linkVal: string) => {
        setLink(linkVal)
        localStorage.setItem(linkName, linkVal)
    }

    return <ProfileImageContext.Provider value={{ link, updateLink }}>
        {children}
    </ProfileImageContext.Provider>
}

export const useProfileImage = () => {
    return useContext(ProfileImageContext)
}