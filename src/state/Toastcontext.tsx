import { createContext, useState } from "react";


const ToastContext = createContext({ toasts: [], setToasts: null });

const ToastContextProvider = ({ children }: any) => {
    const [toasts, setToasts]: any = useState([]);

    return (
        <ToastContext.Provider value={{ toasts, setToasts }}>
            {children}
        </ToastContext.Provider>
    )
}

export { ToastContext, ToastContextProvider }

