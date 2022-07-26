import React from 'react'
import imageupload from '../assets/imageupload.png'
import { BiCloudUpload } from "react-icons/bi"

const ImageUploader = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center w-full gap-4'>
                <div className='w-4/5 cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-300 max-w-md bg-slate-200 px-4 py-8 rounded-lg flex flex-col items-center justify-center'>
                    <BiCloudUpload className='text-8xl opacity-50' />
                    <h1 className='font-semibold opacity-50 text-xl'>Upload your document</h1>
                </div>
                {/* <input type="file" /> */}
                <button className='font-bold max-w-md bg-blue-700 text-white p-2 rounded w-full'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default ImageUploader