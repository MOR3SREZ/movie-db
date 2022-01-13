import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './Context/CatagoryContext';

//styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
