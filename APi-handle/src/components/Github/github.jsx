import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data,setdata] =useState([])
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/UMAIR01785')
  //       .then(respone=> respone.json()
  //       ).then(data=> setdata(data))
        
  //   },[])
  const data =useLoaderData()
  return (
    <div className='bg-gray-500 text-white p-3 m-2 justify-center bouder-rounded'>
        <h1 >Github Follower:{data.followers}</h1>
      <img src={data.avatar_url} alt="Git image" />
    </div>
  )
}

export default Github



export const githubFunction = async ()=>{
  const response = await fetch('https://api.github.com/users/UMAIR01785')
  return await response.json()
}