import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='text-orange-600 bg-black text-center rounded-lg'>Currency Converter</h1>
    </>
  )
}

export default App
