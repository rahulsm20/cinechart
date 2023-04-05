import React,{useState,useEffect} from 'react'
import axios from 'axios'
const List = () => {
  const [watchlist,setWatchlist]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/watchlist')
    .then((res)=>setWatchlist(res.data))
    .catch((err)=>console.log(err))
  },[])
  const movies= watchlist.map((movie)=>(
    <div className='col-4 p-4'>
      <a href={"/movie/"+movie.name}>
      {movie.name}
      </a>
      <img src={movie.image} className='movieImage col-5'/>
    </div>
  ));
  // console.log(watchlist)
  return (
    <div className='text-white d-flex align-items-center justify-content-center flex-wrap'>
      {movies}  
    </div>
  )
}

export default List