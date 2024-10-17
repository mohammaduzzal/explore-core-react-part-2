import { useState } from "react"

export default function Team (){
    const teamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius:'15px'
    }

    const [count, setCount] = useState(11);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () =>{
        // const newCount = count - 1;
        setCount(count -1)
    }

    return (
        <div style={teamStyle}>
            <h3>player :{count}</h3>
            <button onClick={handleAdd}>add player</button>
            <button onClick={handleReduce}>reduce player</button>
        </div>
    )
}