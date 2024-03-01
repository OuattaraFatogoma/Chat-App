import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import {HomePage, LoginPage, RegisterPage} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
