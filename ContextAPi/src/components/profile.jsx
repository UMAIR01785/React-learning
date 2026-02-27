import React,{useContext} from 'react'
import usercontext from '../context/usercontext'
function Profile() {
    const {user}=useContext(usercontext)
    if (!user) return <h2>Please login </h2>
  return (
    <div>User:{user.username}</div>
  )
}

export default Profile