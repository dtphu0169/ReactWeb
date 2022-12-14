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
        <Router basename="/ReactWeb">
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/product' element={<Product/>}></Route>
                <Route exact path='/testimonial' element={<Testimonial/>}></Route>
                <Route exact path='/why' element={<Why/>}></Route>
                <Route exact path='/login' element={<Login/>}></Route>
                <Route exact path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
        
    </div>
  )
}
