

import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard({ children, userName="unknown", initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }


    const text = isFollowing ? "siguiendo": "seguir"
    const buttonClassName = isFollowing 
    ? "tw-follow-card__follow-button tw-follow-card__follow-button--is-following"
    :  "tw-follow-card__follow-button"




    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card__header'>
                <img className='tw-follow-card__avatar' alt="user avatar" src="https://unavatar.io/kikobeats?ttl=1h"/>
            <div className='tw-follow-card__user-info'>
                {children}
                <span className='tw-follow-card__user-tag'>{`@${userName}`}</span>
            </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )

}