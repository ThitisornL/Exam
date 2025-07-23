import React from 'react'
import {NavLink,Routes,Route} from "react-router"
import Notfound from './pages/NotFound'
import Home from './pages/Home'
import FetchApi from './pages/FetchApi'

function App  ()  {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>
        <Route path="/FetchApi" element={<FetchApi/>}/>
      </Routes>
    </div>
  )
}

export default App