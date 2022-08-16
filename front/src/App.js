import './App.css';
import { LoginBl } from './layouts/Login/LoginBl';
import { Routes, Route } from 'react-router-dom';
import { HomeBl } from './layouts/Home/HomeBl';
import React, { Component, useEffect, useState } from 'react';
import { useRef } from 'react';

const api = {
  baseUrl: 'http://localhost:3004',
};

export const ApiContext = React.createContext(api);

export const Error = () => {
  return <div>404</div>;
};

export const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

function App() {
  return (
    <ApiProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LoginBl />} />
          <Route path='/home/*' element={<HomeBl />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </ApiProvider>
  );
}

export default App;
