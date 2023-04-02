import React,{useState} from 'react'

const Profile = () => {
  const [image,setImage]=useState('')
  return (
    <div className='text-white m-5'>
        <h1>
        {localStorage.getItem('Username')}
        </h1>
        <div >
        <input type='file' accept='image/*' onChange={()=>setImage(event.target.value)}></input>
        {localStorage.setItem('user-image',image)}
        <img src={image}/>
        </div>
        <button className='p-2'>Edit profile</button>
    </div>
  )
}

export default Profile