import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
