import { createContext, useContext } from "react";

interface CommonContextInterface { }

const CommonContext = createContext<CommonContextInterface | null>(null);

const CommonContextProvider = ({ children }: any) => {

    return <CommonContext.Provider value={{}}>
        {children}
    </CommonContext.Provider>
}

export { CommonContext, CommonContextProvider }