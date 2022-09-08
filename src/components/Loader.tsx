import React, { useEffect } from 'react'
import { IoSearchCircle } from 'react-icons/io5'
import { useLoader } from '../customHooks/useLoader'

const Loader = () => {
    return <div className='h-screen w-screen absolute z-50 bg-white/[.85] flex items-center justify-center '>
        <div className='flex gap-2 animate-spin'>
            <div className="loading-spinner h-4 w-4 bg-blue-500 rounded-full">
            </div>
            <div className="loading-spinner h-4 w-4 bg-blue-500 rounded-full">
            </div>
            <div className="loading-spinner h-4 w-4 bg-blue-500 rounded-full">
            </div>
        </div>
        {/* <IoSearchCircle className='text-7xl text-blue-500 animate-bounce-fast duration-75' /> */}

    </div>
}

export default Loader