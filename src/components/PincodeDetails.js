// PincodeDetails.js
import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

const PincodeDetails = () => {
  const [inputData,setInputData] = useState('');
  const { pincodeDetails } = useSelector(state => state.pincode);
  const [postOffice,setPostOffice] = useState(pincodeDetails[0].PostOffice)

  const navigate = useNavigate();
  // const handleChange = (e) => {
  //   setInputData(e.target.value);
  //   setPostOffice(postOffice.filter((item) => {
  //     return item.Name.toLowerCase().includes(inputData.toLowerCase());
  //   }))
    
  // }


  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputData(inputValue);
    const filteredPostOffice = pincodeDetails[0]?.PostOffice.filter((item) => {
      return item.Name.toLowerCase().includes(inputValue);
    });
    
    setPostOffice(filteredPostOffice);
  }
  
  const previousPage = () => {
    navigate('/');
  }

  return (
    <div>
      {pincodeDetails.length > 0 ? (
        <div>
          <div className='details-container'>
            <div className='details-wrapper'>
              <div>Pincode : {pincodeDetails[0].PostOffice[0].Pincode}</div>
              <div>Message : {pincodeDetails[0].Message}</div>
              <input type='text' placeholder="Filter By Name" onChange={handleChange}/>
            </div>
            <div>
              <button onClick={previousPage} >Go To Previous Page</button>
            </div>
            
          </div>
          <div >
                <div className='cards-container'> 
                  {
                    postOffice.map((postOffice,index) => (
                      <div className='cards' key={index}>
                        <div>Name : {postOffice.Name}</div>
                        <div>Branch Type : {postOffice.BranchType}</div>
                        <div>Delivery Status : {postOffice.DeliveryStatus}</div>
                        <div>District : {postOffice.District}</div>
                        <div>State : {postOffice.State}</div>
                      </div>
                    ))
                  }
                </div>

          </div>              
        </div>
      ) : (
        <div>Couldn't find the postal data you're looking for...</div>
      )}
    </div>
  );
};

export default PincodeDetails;

