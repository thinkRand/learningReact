import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'




export function App(){

    const format = (userName)=>`@${userName}`

    return (
        <section className='App'>
        <TwitterFollowCard 
        formatUserName={format} userName="midudev"  
        isFollowing={false} >
            <h1>Miguel Angel Duran</h1>
        </TwitterFollowCard>
        
        <TwitterFollowCard 
        formatUserName={format} userName="abG" 
        name="Abel Granados Leani Vera" 
        isFollowing />
          </section>
    )

}


