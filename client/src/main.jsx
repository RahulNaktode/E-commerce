import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './view/Home'
import Signup from './view/Signup'
import Login from './view/Login'


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
