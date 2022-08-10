import React, { useRef, useState } from 'react'
import imageupload from '../assets/imageupload.png'
import { BsCloudUpload } from "react-icons/bs"
import axios from 'axios';
import { useToast } from '../customHooks/useToast';

const URL = "https://fendir.herokuapp.com";

const ImageUploader = () => {
    const fileRef: any = useRef(null)
    const { addToast } = useToast()
    const [file, setFile]: [any, any] = useState(null)

    const handleUpload = (event: any) => {
        event.preventDefault();
        setFile(event.target.files[0])
        const formData = new FormData()
        formData.append("file", file)
        axios.post(`${URL}/fileupload`, formData, {
            headers: {
                auth: localStorage.getItem("user")!
            }
        }).then(res => {
            localStorage.setItem("link", res.data.url)
            addToast("success", "Success", "File has been uploaded!")
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='w-5/6 max-w-md'>
                <input type="file" className='hidden' ref={fileRef} onChange={handleUpload} />
                <button type="button" onClick={() => fileRef.current?.click()} className='py-10 flex flex-col items-center font-bold bg-slate-200 transition-all hover:bg-slate-300 text-white px-2  rounded-lg w-full'>
                    <BsCloudUpload className='text-slate-600 text-4xl' />
                    <p className='text-slate-600 text-3xl px-4 break-all'>
                        {file ? file.name : "Upload file"}
                    </p>
                    <p className='text-slate-600 text-md font-thin'>Only jpgs/pngs please</p>
                </button>
            </div>
        </div>


    )
}

export default ImageUploader