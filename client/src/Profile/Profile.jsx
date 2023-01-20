import React from 'react'

const Profile = () => {
  return (
    <div className='text-white m-5'>
        <h1>
        {localStorage.getItem('Username')}
        </h1>
        <button className='p-2'>Edit profile</button>
    </div>
  )
}

export default Profile