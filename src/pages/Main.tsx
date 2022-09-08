import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../customHooks/useAuth'
import { FaRegImage } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { MdMiscellaneousServices } from "react-icons/md"
import { BsFillPersonFill, BsFillExclamationCircleFill } from "react-icons/bs"
import { useProfiles } from '../customHooks/useProfiles'
import { useProfileImage } from '../customHooks/useProfileImage'

const Main = () => {
  const { profiles } = useProfiles()
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate()
  const { link } = useProfileImage()

  useEffect(() => { }, [link, profiles])

  if (!isLoggedIn) return <Navigate to="/" />

  const handleMenuAction = (task: string) => {
    if (task == "logout") {
      logout()
    } else if (task == "upload") {
      navigate("/main/imageupload")
    } else if (task == "task3") {

    } else if (task == "matches") {
      navigate("/main")
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <ul className="w-full flex justify-evenly bg-blue-500 fixed bottom-0 right-0 transition-all">
          <li title="Upload image to access matches" className='flex gap-2 text-white items-center p-4 text-md border-b-1 relative hover:bg-blue-600 cursor-pointer transition-all' onClick={() => handleMenuAction("upload")}><FaRegImage className='text-3xl' />
            {link == "N/A" && <BsFillExclamationCircleFill className='-top-2 -right-2 text-white bg-transparent absolute top-2 right-1 z-10 text-red-500 text-lg' />}
          </li>
          <li className='flex gap-2 text-white items-center p-4 text-md border-b-1 hover:bg-blue-600 cursor-pointer transition-all' onClick={() => handleMenuAction("matches")}><BsFillPersonFill className='text-3xl' /></li>
          <li className='flex gap-2 text-white items-center p-4 text-md border-b-1 hover:bg-blue-600 cursor-pointer transition-all' onClick={() => handleMenuAction("task3")}><MdMiscellaneousServices className='text-3xl' /></li>
          <li className='flex gap-2 text-white items-center p-4 text-md border-b-1 hover:bg-blue-600 cursor-pointer transition-all' onClick={() => handleMenuAction("logout")}><FiLogOut className='text-3xl' /></li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Main