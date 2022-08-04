import { createContext, useContext, useEffect, useState } from "react";

interface ToastInterface {
    id: string | number;
    status: string;
    title: string;
    description: string;
}

interface ToastContextInterface {
    toasts: ToastInterface[];
    addToast: (data: ToastInterface) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<any | null>({
    toasts: [],
    addToast: null,
    removeToast: null
});

export const ToastProvider = ({ children }: any) => {
    const [toasts, setToasts]: [ToastInterface[], any] = useState([]);

    const addToast = (status: string, title: string, description: string): void => {
        let id = new Date().getTime()
        setToasts([...toasts, { id, title, status, description }]);

        setTimeout(() => {
            removeToast(id)
        }, 5000)
    }

    const removeToast = (id: string | number): void => {
        setToasts((toasts: any) => toasts.filter((t: any) => t.id != id))
    }

    return <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
        {children}
    </ToastContext.Provider>
}

export const useToast = () => {
    return useContext(ToastContext)
}