import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        setData(data)
    })
    
    }, [])
    
    // src={data.avatar_url} image link ke place me hoga

  return (
    <div className='text-center m-5 bg-blue-400 text-3xl'>Github Followers : {data.followers} 
    <img src="https://www.edureka.co/blog/wp-content/uploads/2024/06/react-image-300x300.jpg" alt="picture" width={300} />
    </div>
  )
}

export default Github