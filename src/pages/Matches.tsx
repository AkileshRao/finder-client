import React, { useEffect } from 'react'
import { ProfilesProvider, useProfiles } from '../customHooks/useProfiles'
import { FaRegImage } from "react-icons/fa"
import TinderCard from 'react-tinder-card'

const Matches = () => {
    const { profiles, fetchProfiles } = useProfiles()
    console.log(profiles);

    useEffect(() => {
        fetchProfiles()
    }, [])

    const onSwipe = (direction: any, nametoDelet: any) => {
        console.log('You swiped: ' + direction, nametoDelet)
    }

    const onCardLeftScreen = (myIdentifier: any) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <>
            <div className="matches w-4/5 h-4/5 flex items-center justify-center">
                {
                    profiles && profiles.map((profile: any) => {
                        {/* @ts-ignore */ }
                        return <TinderCard
                            className='h-2/5 w-4/6 max-w-xs bg-white border-2 absolute  rounded-md flex items-center flex-col items-center justify-center'
                            key={profile.name}
                            onSwipe={(dir) => onSwipe(dir, profile.name)}
                            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                            preventSwipe={['right', 'left']}>
                            <div>
                                <FaRegImage className='text-5xl m-auto' />
                                <p>No image found!</p>
                            </div>
                            <p className='text-3xl font-black absolute bottom-4 left-4'>{profile.username}</p>

                        </TinderCard>
                    })
                }

            </div>

            {/* <div className="no-matches">

            </div> */}
        </>
    )
}

export default Matches