import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  /*
      const [count, setCount] = useState(0)  

      Here count is variable and setCount is function that will be called every time when button is clicked 
  */


  const addValue = () => {

    return count === 20 ? setCount(0) : setCount(count + 1)
  }

  const removeValue = () => {
    return count === 0 ? 0 : setCount(count - 1);
  }

  return (
    <>
      <div className='container'>
        {count}
      </div>
      <h1>first project</h1>

      <button onClick={addValue}> Add value </button>
      <br />
      <button onClick={removeValue}> remove value </button>
    </>
  )
}

export default App
