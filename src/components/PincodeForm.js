// PincodeForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPincodeDetails, resetState } from '../features/pincodeSlice';
import {useNavigate} from 'react-router-dom'

const PincodeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pincode, setPincode] = useState('');
  const { loading, error } = useSelector(state => state.pincode);

  const handleSubmit = e => {
      e.preventDefault();
      const pincodeNumber = parseInt(pincode); 
    
      if (isNaN(pincodeNumber) || pincodeNumber.toString().length !== 6) {
        alert('Please enter a valid 6-digit pincode.');
        setPincode('')
        return;
      }
      
      dispatch(fetchPincodeDetails(pincodeNumber));
      navigate('navigation');
    };
  


  return (
    <div>
      <form onSubmit={handleSubmit} className='home'>
        <div >Enter Pincode</div>
        <input
          type="text"
          placeholder="Enter pincode"
          value={pincode}
          onChange={e => setPincode(e.target.value)}
        />
        <button type="submit" disabled={loading} >
          Lookup
        </button>

      </form>
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default PincodeForm;



