import Chai from "./chai"
function App() {

  // declearing variable
  const username = "Priyanka"



  return (
    <>  
      <Chai />
  
  {/* injecting variable i.e evaluated expression */}
  
      <h1>H1 tag is randering {username}</h1>
      <p>P tag is randering</p>

    </>
  )
}

export default App
