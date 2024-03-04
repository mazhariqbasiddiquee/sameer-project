import React from 'react'
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import PincodeDetails from './PincodeDetails';


function Navigation() {
    const { loading, error } = useSelector(state => state.pincode);
    // const data = useSelector(state => state.pincode);
    
    // console.log(data);
  return (
    <div>
        {
            loading?(<Spinner/>) : (<PincodeDetails/>)
        }
    </div>
  )
}

export default Navigation