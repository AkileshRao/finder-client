import { createContext, useState } from "react";

interface ToastContextInterface {
    toasts: ToastInterface[];
    setToasts: any;
    addToast: (status: string, title: string, description: string) => void;
}

interface ToastInterface {
    id: string | number;
    status: string;
    title: string;
    description: string;
}

const ToastContext = createContext<ToastContextInterface | null>(null);

const ToastContextProvider = ({ children }: any) => {
    const [toasts, setToasts]: any = useState([]);

    const addToast = (status: string, title: string, description: string) => {
        let id = new Date().getTime()
        // @ts-ignore
        setToasts([...toasts, {
            id, status, title, description
        }])
    }

    return (
        <ToastContext.Provider value={{ toasts, setToasts, addToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export { ToastContext, ToastContextProvider };
export type { ToastInterface };

