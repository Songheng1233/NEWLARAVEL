import React from 'react'
import Navbar from "./Navbar"
import Home from '../Page/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../Page/ProductDetails'
import Cart from '../Page/Cart'
import Payment from '../Page/Payment'
import Category from './Category'
import Exclusive from './Exclusive'
import Footer from './Footer'
import ContactUs from './contact'
import Collections from './Collections'





const Customer = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Shop' element={<Category/>}/>
        <Route path='/Shop' element={<Collections/>}/>
        <Route path='/about us' element={<Exclusive/>}/>
        <Route path='/contact us' element={<ContactUs/>}/>
        
        <Route path='/products/:id' element={<ProductDetails/>}/>

      </Routes>

      <Footer/>

    </>
  )
}

export default Customer