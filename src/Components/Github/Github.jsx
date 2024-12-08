import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/ayush88-debug")  //without Loader
    //     .then((response)=>response.json())
    //     .then((response)=>setData(response))
    // },[])

    const data=useLoaderData()

  return (
    <div>
      <div className='text-center p-5 text-3xl'>Github Followers:{data.followers} </div>
      <div className='flex flex-wrap justify-center content-center'>
      <img src={data.avatar_url} alt="" />
      </div>
    </div>
  )
}

export default Github



export async function githubInfoLoader() {
  const response = await fetch("https://api.github.com/users/ayush88-debug")
  const data= await response.json()
  return data

}

