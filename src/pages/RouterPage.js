import React, { Component }  from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Product from './Product';
import Testimonial from './Testimonial';
import Why from './Why';
import Login from './Login';
import Register from './Register';

export default function 
RouterPage() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/ReactWeb" element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/testimonial' element={<Testimonial/>}></Route>
                <Route path='/why' element={<Why/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
        
    </div>
  )
}
