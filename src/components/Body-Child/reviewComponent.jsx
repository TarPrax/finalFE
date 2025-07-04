import React, { useState } from 'react';
import axios from 'axios';
import { endpoint } from '../../endpoint'; // Adjust the import path as necessary

const ReviewComponent = ({firstName,lastName,emailId,_id}) => {

const [Message, setMessage] = useState(''); 
  async function handleConn(status){
  
const user = await axios.post(`${endpoint}/newConnectionRequest/${status}/${_id}`,{},
  {withCredentials: true})
console.log(user);
setMessage(status);

  }
  

console.log(_id)

  return ( 
    <div className="feed-item bg-base-200 p-4 rounded-lg shadow-md mb-4 w-100">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="User Avatar"
          className="w-16 h-16 rounded-full mb-4"   />
    <h2>{firstName} {lastName} Here !!</h2>
    <h3>Email: {emailId}</h3>
    <button className="btn btn-primary" onClick={()=>handleConn('interested')}>Interested</button>
    <button className="btn btn-secondary ml-2" onClick={()=>handleConn('ignored')}>Ignored</button>
    <div className="feed-item-actions mt-4">
      <button className="btn btn-sm btn-outline" >View Profile</button>
      <button className="btn btn-sm btn-outline ml-2">Message</button>  
      
    </div>
    {Message && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span> Successfully {Message} the {firstName} </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewComponent;