import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

//pages
import Home from './pages/Home';

//styles
import './App.css';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
