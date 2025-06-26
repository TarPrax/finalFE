import React from 'react';


const ConnectionComponent = ({firstName,
          lastName,
          emailId,
            _id
}) => {


  

  return ( 
    <div className="feed-item bg-base-200 p-4 rounded-lg shadow-md mb-4 w-100">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="User Avatar"
          className="w-16 h-16 rounded-full mb-4"   />
    <h2>{firstName} {lastName} Here !! </h2>
    <h3>emailId:{emailId}</h3>
    <h3>_id:{_id}</h3>
    
    <div className="feed-item-actions mt-4">
      <button className="btn btn-sm btn-success red" > View Profile</button>
      <button className="btn btn-sm btn-error ml-2">Message</button>
      
      
    </div>
    </div>
  )
}

export default ConnectionComponent;