import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-500 text-black'>priyanka</h1>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
