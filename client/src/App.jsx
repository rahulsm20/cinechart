
import './App.css'
import Home from './Home/Home'
import Login from './Login/Login'
import Error from './Error'
import Signup from './Signup/Signup'
import Movie from './Movie/Movie'
import Watch from './Watchlist/Watch'
import Profile from './Profile/Profile'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/:movie' element={<Movie/>}/>
      <Route path='/watch-list' element={<Watch/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  )
}

export default App
