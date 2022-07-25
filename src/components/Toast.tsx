import React from 'react'
import ReactDOM from 'react-dom'

import { BsCheckCircleFill, BsFillXCircleFill, BsExclamationCircleFill, BsFillInfoCircleFill } from "react-icons/bs"

const Toast = ({ status, title, description }: any) => {

    const renderIcon = () => {
        if (status == "success") return <BsCheckCircleFill className='text-3xl' />
        if (status == "error") return <BsFillXCircleFill className='text-3xl text-red-600' />
        if (status == "info") return <BsFillInfoCircleFill className='text-3xl' />
        if (status == "warning") return <BsExclamationCircleFill className='text-3xl' />
    }

    return ReactDOM.createPortal(
        <div className='border-2 px-3 py-2 rounded shadow-md flex items-center gap-3 absolute top-4 right-4'>
            <div>
                <h1 className='font-bold text-red-600'>Toast title</h1>
                <p>This is a normal toast message.</p>
            </div>
            <div>
                {renderIcon()}
            </div>
        </div>
        , document.body)
}

export default Toast