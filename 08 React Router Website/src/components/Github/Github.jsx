import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  console.log(data)

  return (
    <div className='text-center m-4 bg-gray-600 text-white flex gap-8 p-4 text-3xl'>
      <img src={data.avatar_url} alt="Git picture" width={300} />

      <div className='myOwnClass'>
        <p>Name: {data.name} </p>
        <p>Username: {data.login}</p>
        <p>Bio: {data.bio}</p>
        <p>Github followers: {data.followers}</p>
        <p>Public Repos: {data.public_repos} </p>
        <p>Blog: <a href={data.blog}>Click Here</a></p>
      </div>

    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/gauravssah')
  return response.json()
}