import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

// const ReactElement = {
  //  type: 'a',
  //   props: {
  //       href: 'https://google.com',
  //       target: '_blank'
  //   },

  //   Children: 'Click me to visit google'
// }

const anotherElement = (

  <a href='https://google.com' target='_blank'>Visit 
  Google</a>
)

const anotherUsername = "Komal"

const ReactElement = React.createElement(
  'a', 
  {href : 'https://google.com', target: '_blank'}, 
  'click to me vist google',
  " ",  //space after visit google
  anotherUsername
)


createRoot(document.getElementById('root')).render(

  //  MyApp() this can also but dont write
    // <MyApp />
    // <App />

    
    // anotherElement
    ReactElement

)
