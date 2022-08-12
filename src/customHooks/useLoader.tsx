import React, { createContext, useContext, useState } from 'react'

interface ILoaderInterface {
    loading: boolean;
    setLoading: any;
}

export const LoaderContext = createContext<ILoaderInterface | null>(null)

export const LoaderProvider = ({ children }: any) => {
    const [loading, setLoading] = useState(false);

    // const handleLoading = (value: boolean) => {
    //     if (value == true) setLoading(false)
    //     if (value == false) setLoading(true)
    // }

    return <LoaderContext.Provider value={{ loading, setLoading }}>
        {children}
    </LoaderContext.Provider>
}

export const useLoader = () => {
    return useContext(LoaderContext)
}