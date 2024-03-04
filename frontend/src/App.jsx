import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import {HomePage, LoginPage, RegisterPage} from './pages';
import { useGlobalContext } from './context';

function App() {
  const {user} = useGlobalContext();
  return (
    <>
      <Routes>
        <Route path='/' element={user?<HomePage/>:<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
