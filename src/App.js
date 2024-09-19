import React, { Components } from 'react'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Contacts from './Components/Contacts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="product" element={<Products />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
