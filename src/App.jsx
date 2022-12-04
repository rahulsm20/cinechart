
import './App.css'
import Home from './frontend/Home'
import Login from './Login/Login'
import Error from './Error'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  )
}

export default App
