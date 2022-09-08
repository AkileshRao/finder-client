import { useEffect, useState } from 'react'
import { useProfiles } from '../customHooks/useProfiles'
import { BsImage } from "react-icons/bs"
import TinderCard from 'react-tinder-card'
import { useLoader } from '../customHooks/useLoader'
import axios from 'axios'
import { useProfileImage } from '../customHooks/useProfileImage'
import { useNavigate } from 'react-router-dom'
import { IoWarningOutline } from "react-icons/io5"

const URL = "https://fendir.herokuapp.com";

const Matches = () => {
    const { profiles, fetchProfiles, setProfiles } = useProfiles()
    const [lastDirection, setLastDirection] = useState()
    const { loading, setLoading } = useLoader()!;
    const { link } = useProfileImage()
    const navigate = useNavigate()
    console.log(link);

    useEffect(() => {
        fetchProfiles()
    }, [])

    const swiped = (direction: any, character: any) => {
        setLastDirection(direction)
        axios.post(`${URL}/action/${direction}`,
            {
                docs: character.url,
                username: character.name,
                to_id: character.id
            },
            {
                headers: {
                    auth: localStorage.getItem("user")!
                }
            }
        ).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    const outOfFrame = (name: any) => {
        setProfiles((profiles: any) => profiles.filter((prof: any) => prof.name != name))
    }

    if (link == "N/A" || link == null) {
        return <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='w-5/6 max-w-md'>
                <input type="file" className='hidden' />
                <button type="button" onClick={() => navigate("/main/imageupload")} className='py-10 flex flex-col items-center font-bold bg-orange-100 transition-all hover:bg-orange-200 text-white px-2  rounded-lg w-full'>
                    <IoWarningOutline className='text-amber-800 text-4xl' />
                    <p className='text-amber-800 text-3xl px-4 break-all'>
                        Setup pending!
                    </p>
                    <p className='text-amber-800 text-md font-thin'>Please upload a photo before starting.</p>
                </button>
            </div>
        </div>
    }

    return (
        <>
            <div className="matches w-4/5 h-5/5">
                <div className='cardContainer  w-5/5 h-4/5  flex items-center justify-center'>
                    {
                        profiles && profiles.map((character: any, index: number) => {
                            {/* @ts-ignore */ }
                            return <TinderCard
                                className='h-2/5 w-4/6 cursor-pointer max-w-xs bg-white border-4 absolute  rounded-2xl flex items-center flex-col items-center justify-center'
                                key={character.name}
                                onSwipe={(dir) => swiped(dir, character)}
                                onCardLeftScreen={() => outOfFrame(character.name)}
                                preventSwipe={["up", "down"]}
                            >
                                {
                                    character.url != "N/A" ?
                                        <div className='bg-cover w-full h-full bg-center rounded-xl' style={{ backgroundImage: `url(${character.url})` }}>
                                            {/* <img src={character.url} alt="" /> */}
                                            <p className='text-3xl font-semibold w-full text-white rounded-lg px-3 pt-4 pb-3 h-16 absolute bottom-0 left-0'
                                                style={{ background: "linear-gradient(to top, black, transparent)" }}>{character.name}</p>
                                        </div>
                                        :
                                        <div className='card'>
                                            <BsImage className='text-8xl m-auto opacity-40' />
                                            <p className='text-3xl font-semibold opacity-40'>{character.name}</p>
                                        </div>
                                }


                            </TinderCard>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Matches