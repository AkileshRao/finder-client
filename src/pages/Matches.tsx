import { useEffect, useState } from 'react'
import { useProfiles } from '../customHooks/useProfiles'
import { BsImage } from "react-icons/bs"
import TinderCard from 'react-tinder-card'
import { useLoader } from '../customHooks/useLoader'

const Matches = () => {
    const { profiles, fetchProfiles, setProfiles } = useProfiles()
    const [lastDirection, setLastDirection] = useState()
    const { loading, setLoading } = useLoader()!;

    useEffect(() => {
        fetchProfiles()
    }, [])

    const swiped = (direction: any) => {
        setLastDirection(direction)
    }

    const outOfFrame = (name: any) => {
        setProfiles((profiles: any) => profiles.filter((prof: any) => prof.name != name))
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
                                onSwipe={(dir) => swiped(dir)}
                                onCardLeftScreen={() => outOfFrame(character.name)}
                                preventSwipe={["up", "down"]}
                            >
                                <div className='card'>
                                    <BsImage className='text-8xl m-auto opacity-40' />
                                    <p className='text-3xl font-semibold opacity-40'>{character.name}</p>
                                </div>

                            </TinderCard>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Matches