import './TwitterFollowCard.css'

export function TwitterFollowCard({ children, userName, name, isFollowing, formatUserName}){
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card__header'>
                <img className='tw-follow-card__avatar' alt="user avatar" src="https://unavatar.io/kikobeats?ttl=1h"/>
            <div className='tw-follow-card__user-info'>
                {children}
                <span className='tw-follow-card__user-tag'>{formatUserName(userName)}</span>
            </div>
            </header>

            <aside>
                <button className='tw-follow-card__follow-button'>
                    {isFollowing?"dejar de seguir" :"Seguir"}
                </button>
            </aside>
        </article>
    )

}