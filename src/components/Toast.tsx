import { BsCheckCircleFill, BsFillXCircleFill, BsExclamationCircleFill, BsFillInfoCircleFill } from "react-icons/bs"
import { useToast } from '../customHooks/useToast'

const Toast = () => {
    const { toasts, removeToast } = useToast()

    const renderIcon = (status: string) => {
        if (status == "success") return <BsCheckCircleFill className='text-3xl text-green-600' />
        if (status == "error") return <BsFillXCircleFill className='text-3xl text-red-600' />
        if (status == "info") return <BsFillInfoCircleFill className='text-3xl text-blue-600' />
        if (status == "warning") return <BsExclamationCircleFill className='text-3xl text-orange-600' />
    }

    return (
        <div className='absolute top-4 right-4 flex flex-col gap-1' >
            {
                toasts?.map((toast: any) =>
                    <div className='w-96 z-50 max-w-xs bg-white border-2 px-3 py-2 rounded shadow-sm flex items-center cursor-pointer justify-between gap-3 hover:border-red-600' key={toast.id} id={toast.id} onClick={() => removeToast(toast.id)}>
                        <div>
                            {toast.status == "error" && <h1 className='font-bold text-red-600'>{toast.title}</h1>}
                            {toast.status == "success" && <h1 className='font-bold text-green-600'>{toast.title}</h1>}
                            {toast.status == "info" && <h1 className='font-bold text-blue-600'>{toast.title}</h1>}
                            {toast.status == "warning" && <h1 className='font-bold text-orange-600'>{toast.title}</h1>}
                            <p>{toast.description}</p>
                        </div>
                        <div>
                            {renderIcon(toast.status)}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Toast