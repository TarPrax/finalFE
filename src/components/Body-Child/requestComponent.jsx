import React, { use, useEffect } from 'react';
import axios from 'axios';


const RequestComponent = ({connectionStatus,fromUserId,_id
}) => {


async function handleClick(status) {
   try 
   {
 const response = await axios.post(`http://localhost:4336/requests/review/${status}/${_id}`, {}, {
      withCredentials: true,
   });
   console.log(response);
   } catch(error) {
    console.error('Error handling click:', error);
  }
  
}
  

  return ( 
    <div className="feed-item bg-base-200 p-4 rounded-lg shadow-md mb-4 w-100">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="User Avatar"
          className="w-16 h-16 rounded-full mb-4"   />
    <h2>The user is {connectionStatus}</h2>
    <h3>From User Name: {fromUserId?.firstName}</h3> 
    <p>{fromUserId?._id}</p>
    
    <div className="feed-item-actions mt-4">
      <button className="btn btn-sm btn-success red"  onClick={()=>handleClick("accepted")}>Accept </button>
      <button className="btn btn-sm btn-error ml-2" onClick={()=>handleClick("rejected")}>Reject</button>  
      <button className="btn btn-sm btn-soft ml-2">View Profile</button>
      
    </div>
    </div>
  )
}

export default RequestComponent;