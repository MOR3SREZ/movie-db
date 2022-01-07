import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

//pages
import Home from './pages/Home';

//styles
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
