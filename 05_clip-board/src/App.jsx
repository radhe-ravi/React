import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  // UseREF Hook

  const passwordReference = useRef(null);

  const fn = () => {
    let pass = ""
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) {
      characters += '0123456789'
    }

    if (symbol) {
      characters += '!@#$%^&*()'
    }
    for (let i = 1; i <= length; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length + 1))
    }
    setPassword(pass)
  }

  const passwordGenerator = useCallback(fn, [length, number, symbol, setPassword])


  useEffect(() => {
    passwordGenerator();
  }, [length, number, symbol, passwordGenerator])


  const copyToClip = useCallback(() => {
    passwordReference.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]
  )
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input

            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            ref={passwordReference}
            readOnly
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'

            onClick={copyToClip}
          > Copy </button>

        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <span className='text-green-400'>Length: ({length})</span>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={number}
              id='numberInput'
              onChange={() => setNumber((prev) => !prev)}
            />
            <span className='text-green-400'>Number</span>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={symbol}
              id='symbolInput'
              onChange={() => setSymbol((prev) => !prev)}
            />
            <span className='text-green-400'>Symbol</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
