import { useState } from 'react'

import './App.css'

function App() {
 const [counter , setCounter] = useState(2)

 const addvlaue=()=>{
  if(counter>=20){
    return
  }
  else{
    setCounter(counter+1)
  
  }
  
 }
 const removevalue=()=>{
  if(counter === 0){
    return;
  }
  else{
     setCounter(counter-1)
  }
 
 };

  return (
    <>
     <div>
      <h1>Counter{counter}</h1>
      <button onClick={addvlaue}>Add value{counter}</button>
      <button onClick={removevalue}>Remove value{counter}</button>
     </div>
    </>
  )
}

export default App
