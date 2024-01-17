import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData();

  return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
          Github Followers: {data.followers}
          <img src={data.avatar_url} alt="" srcset="" />

      </div>
      
  )
}

export default Github

export const githubInforLoader = async () => {
    const response = await fetch(`https://api.github.com/users/CHIRANTAN-001`)
    return response.json()
    console.log((response.json()))
}