import React, { useEffect, useRef, useState } from 'react'
import imageupload from '../assets/imageupload.png'
import { BsCloudUpload } from "react-icons/bs"
import axios from 'axios';
import { useToast } from '../customHooks/useToast';
import { useProfileImage } from '../customHooks/useProfileImage';
import { useLoader } from '../customHooks/useLoader';

const URL = "https://fendir.herokuapp.com";

const ImageUploader = () => {
    const fileRef: any = useRef(null)
    const { addToast } = useToast()
    const [file, setFile]: [string, any] = useState("")
    const { link, updateLink } = useProfileImage()
    const { loading, setLoading } = useLoader()!

    const handleUpload = (event: any) => {
        setLoading(true)
        const formData = new FormData()
        console.log(event.target.files[0]);
        setFile(event.target.files[0]?.name)
        formData.append("file", event.target.files[0])
        axios.post(`${URL}/fileupload`, formData, {
            headers: {
                auth: localStorage.getItem("user")!
            }
        }).then(res => {
            setLoading(false)
            updateLink("link", res.data.url)
            addToast("success", "Success", "File has been uploaded!")
        }).catch(err => {
            setLoading(false)
            console.log(err);
        })
    }


    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='w-5/6 max-w-md'>
                <input type="file" className='hidden' name="profileImage" ref={fileRef} onChange={handleUpload} />
                <button type="button" onClick={() => fileRef.current?.click()} className='py-10 flex flex-col items-center font-bold bg-sky-100 transition-all hover:bg-sky-200 text-white px-2  rounded-lg w-full'>
                    <BsCloudUpload className='text-sky-600 text-4xl' />
                    <p className='text-sky-600 text-3xl px-4 break-all'>
                        {file ? file : "Upload file"}
                    </p>
                    <p className='text-sky-600 text-md font-thin'>Only jpgs/pngs please</p>
                </button>
            </div>
        </div>


    )
}

export default ImageUploader