import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './team'
import Users from './users'

function App() {

  function handleClick(){
    alert("btn click")
  }
  const handleClick2 = ()=>{
    alert('btn2 is clicked')
  }
  const addFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h3>explore core concept of React</h3>

      <Friends></Friends>

      <Users></Users>
      <Team></Team>

      <Counter></Counter>

    <button onClick={handleClick}>click me</button>
    <button onClick={handleClick2}>toka mar</button>
    <button onClick={()=>{alert('de dana dan')}}>arrow function in btn</button>
    <button onClick={()=>addFive(3)}>call function in onClick with arrow</button>
    </>
  )
}

export default App
