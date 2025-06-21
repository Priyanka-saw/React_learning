import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-3xl text-white align-middle flex justify-center mx-20 p-3' >User : {userid}</div>
  )
}

export default User