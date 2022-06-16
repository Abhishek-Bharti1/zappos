import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Sneakers from '../Pages/Sneakers'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/sneakers' element={<Sneakers/>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>

    </Routes>
  )
}

export default AllRoutes