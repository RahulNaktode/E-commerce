import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  </BrowserRouter>
)
