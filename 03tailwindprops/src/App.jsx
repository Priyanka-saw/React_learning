import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import Navbar from './components/navbar'



function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   username : "priyanka",
  //   name : "riya"
  // }

  // let newArr = {
  //   sub : "cs",
  //   class: 2,

  //   sub : {
  //     name : "niya",
  //     subname : "tiya"
  //   }
  // }


  return ( 
    <>
     {/* <h1 className='bg-red-500 text-black p-4 rounded 20px mb-5'>vite and tailwind</h1> */}


    {/* passing props -> property*/}

      {/* <Card chennal="chaiorcode" name = "Priyanka" msgtext = "Contact me" />
      <Card name = "nancy" msgtext="et in touch"/>  */}

        <Navbar />

    </>
  )
}

export default App
