import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Footer2  from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Card username="Jay" /> 
       
       <Card username="Jayesh" price='123456' /> 

       <Footer2/>
    </>
  )
}

export default App
