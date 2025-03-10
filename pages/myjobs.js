import React,{useState, useEffect} from 'react'
import { parseCookies  } from 'nookies'

import HeadersJob from '../components/HeaderJobs/HeaderJobs'
import useMe from '../hooks/useMe'
import getConfig from 'next/config'


const { publicRuntimeConfig } = getConfig()

export default function myJobs() {
  const [user, setUser] = useState(null)
  const [myJobs, setMyJobs] = useState([])

  useEffect(()=>{
  getMyData()
  .then(res=>{
    setUser(res)
    getMyJobs(res.id)
    .then(applies =>{
    console.log(applies)
    setMyJobs(applies)
    })
  })


  },[])

  

  return (
    <>
      <HeadersJob />
      <h1>{user?.username}</h1>
      <h2>Jobs applies</h2>
      <ul>
         {myJobs.map(job=>(<li key={job.id}>{job.title}</li>))}
      </ul>
    
    </>
  )
}

async function getMyJobs(id){
  const jwt = parseCookies().jwt
  const getData = await fetch(`${publicRuntimeConfig.API_URL}/posts?aspirantes=${id}`)
  const myPost = await getData.json()
  return myPost;
}



async function getMyData() {
  const jwt = parseCookies().jwt
   const getData = await fetch(`${publicRuntimeConfig.API_URL}/users/me`, {
       method: "GET",
       headers: {
           'Authorization': `Bearer ${jwt}`,
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       }
   })
   const getDataResponse = await getData.json()
   return getDataResponse    
 }
 
