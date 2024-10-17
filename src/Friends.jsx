import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'


export default function Friends(){
    const [friends, setFends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFends(data))
    },[])

    return (
        <div className='box'>
            <h2>friends : {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
        
    )
}