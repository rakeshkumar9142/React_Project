import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter,setCounter] = useState(2)

 // let counter = 15;

  const addvalue = () => {
    console.log("value added",counter);
    counter = counter + 1;
    setCounter(counter)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter-1) 
    }
   
  }
 
  return (
    <>
     <h1>Chai aur react</h1> 
     <h2>Counter value : {counter}</h2>
     <button
     onClick={addvalue}
     >Add value : {counter}</button>
     <br/>
     <button
     onClick={removevalue}
     >Remove value : {counter}</button>
    </>
  )
}

export default App
