import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'
import { useState } from 'react'

const users = [
{
    userName: 'midudev',
    name:"Miguel Angel Duran",
    isFollowing: true
},
{
    userName: 'pheral',
    name:"Pablo H",
    isFollowing: false
},
{
    userName: 'pacoHdez',
    name:"Paco hdez",
    isFollowing: true
},
{
    userName: 'TMChein',
    name:"Tomas",
    isFollowing: false
}
]


export function App(){

    const [isFollowing, setIsFollowing] = useState(true)
   
    return (
        <section className='App'>
        {
            users.map(({ userName, name, isFollowing })=>
                <TwitterFollowCard
                key={userName}
                userName={userName}
                name={name}
                initialIsFollowing={isFollowing}
                />
            )
        }
            
        </section>
    )

}


