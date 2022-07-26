import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import { BsCheckCircleFill, BsFillXCircleFill, BsExclamationCircleFill, BsFillInfoCircleFill } from "react-icons/bs"
import { ToastContext } from '../state/Toastcontext'

const Toast = ({ status, title, description }: any) => {
    const { toasts } = useContext(ToastContext)

    const renderIcon = () => {
        if (status == "success") return <BsCheckCircleFill className='text-3xl text-green-600' />
        if (status == "error") return <BsFillXCircleFill className='text-3xl text-red-600' />
        if (status == "info") return <BsFillInfoCircleFill className='text-3xl text-blue-600' />
        if (status == "warning") return <BsExclamationCircleFill className='text-3xl text-orange-600' />
    }

    return (
        <div>
            {
                toasts.map((toast: any) => {
                    return (
                        <div className='border-2 px-3 py-2 rounded shadow-sm flex items-center gap-3' id={toast.id}>
                            <div>
                                {status == "error" && <h1 className='font-bold text-red-600'>{toast.title}</h1>}
                                {status == "success" && <h1 className='font-bold text-green-600'>{toast.title}</h1>}
                                {status == "info" && <h1 className='font-bold text-blue-600'>{toast.title}</h1>}
                                {status == "warning" && <h1 className='font-bold text-orange-600'>{toast.title}</h1>}
                                <p>{toast.description}</p>
                            </div>
                            <div>
                                {renderIcon()}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Toast