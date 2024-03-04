// App.js

import React from 'react';
import { useSelector } from 'react-redux';
import PincodeForm from './components/PincodeForm'; 
import Spinner from './components/Spinner'; 
import PincodeDetails from './components/PincodeDetails'; 
import {Routes,Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.css'

const App = () => {
  const loading = useSelector(state => state.pincode.loading);
  const pincodeData = useSelector(state => state.pincode.data);

  return (
    <Routes>
      <Route path='/' element={<PincodeForm/>}/>
      <Route path='/navigation' element={<Navigation/>}/>
    </Routes>
  );
};

export default App;
