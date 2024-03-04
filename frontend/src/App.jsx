import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import {HomePage, LoginPage, RegisterPage} from './pages';
import { useGlobalContext } from './context';

function App() {
  const {user} = useGlobalContext();
  return (
    <>
      <Routes>
        <Route path='/' element={user ? <HomePage/> : <Navigate to={"/login"}/>}/>
        <Route path='/register' element={user ? <Navigate to={"/"}/> : <RegisterPage/>}/>
        <Route path='/login' element={user ? <Navigate to={"/"}/> : <LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
