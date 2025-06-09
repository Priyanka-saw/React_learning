import React from 'react'

function Card({name, msgtext}) {

  console.log(name)
  // console.log(props.name);
  
  return (
  <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ... bg-white ">
  <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/src/assets/profile-3.jpg" alt="" />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">{name}</p>
      <p className="font-medium text-gray-500">Product Engineer</p>
    </div>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      {msgtext}
    </button>
  </div>
</div>  )
}

export default Card