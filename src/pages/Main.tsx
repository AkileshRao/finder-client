import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../customHooks/useAuth'
import { HiMenu } from "react-icons/hi"
import { FaRegImage } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { MdMiscellaneousServices } from "react-icons/md"
import { BsFillPersonFill, BsFillExclamationCircleFill } from "react-icons/bs"
import { useProfiles } from '../customHooks/useProfiles'
import { useProfileImage } from '../customHooks/useProfileImage'
import Matches from './Matches'

const Main = () => {
  const { profiles } = useProfiles()
  const { isLoggedIn, logout } = useAuth();
  const [opened, setOpened] = useState(false)
  const navigate = useNavigate()
  const isImage = localStorage.getItem("link")
  const { link } = useProfileImage()

  useEffect(() => { }, [link, profiles])

  if (!isLoggedIn) {
    return <Navigate to="/" />
  }

  const handleMenuClick = (event: any) => {
    event.stopPropagation()
    setOpened(opened ? false : true);
  }

  const handleDOMClick = (event: any) => {
    if (event.target.id != "menu-btn") {
      setOpened(false)
    }
  }


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

  // const
  return (
    <div onClick={handleDOMClick} className="h-screen w-screen flex items-center justify-center">
      <div className='absolute bottom-3 right-3'>
        <div>
          <ul className={"w-60 border-2 absolute bottom-14 right-0 border-slate-200 border-b-1 p-2 rounded-md transition-all" + (opened ? " block" : " hidden")}>
            <li title="Upload image to access matches" className='flex gap-2 items-center px-2 py-1 text-md border-b-1 hover:bg-sky-300 cursor-pointer rounded transition-all' onClick={() => handleMenuAction("upload")}><FaRegImage />
              Upload image
              {link == "N/A" && <BsFillExclamationCircleFill className='-top-2 -right-2 bg-white rounded-full z-10 text-red-500 text-lg' />}
            </li>
            <li className='flex gap-2 items-center px-2 py-1 text-md border-b-1 hover:bg-sky-300 cursor-pointer rounded transition-all' onClick={() => handleMenuAction("matches")}><BsFillPersonFill />Matches</li>
            <li className='flex gap-2 items-center px-2 py-1 text-md border-b-1 hover:bg-sky-300 cursor-pointer rounded transition-all' onClick={() => handleMenuAction("task3")}><MdMiscellaneousServices />Task 3</li>
            <hr className='m-1' />
            <li className='flex gap-2 items-center px-2 py-1 text-md border-b-1 hover:bg-sky-300 cursor-pointer rounded transition-all' onClick={() => handleMenuAction("logout")}><FiLogOut /> Log out</li>
          </ul>
          <div>
            {link == "N/A" &&
              <BsFillExclamationCircleFill className='absolute -top-2 -right-2 bg-white rounded-full z-10 text-red-500 text-lg' />
            }
            <button onClick={handleMenuClick} id="menu-btn" className='bg-sky-400 text-white p-2 rounded-md relative transition-all hover:bg-sky-500'><HiMenu className="text-3xl" /></button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Main