import React from 'react'

const FeedComponent = ({firstName,lastName,emailId}) => {
  return ( 
    <div className="feed-item bg-base-200 p-4 rounded-lg shadow-md mb-4 w-100">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="User Avatar"
          className="w-16 h-16 rounded-full mb-4"   />
    <h2>{firstName} {lastName} Here !!</h2>
    <h3>Email: {emailId}</h3>
    <button className="btn btn-primary" >Connect</button>
    <button className="btn btn-secondary ml-2">Ignore</button>
    <div className="feed-item-actions mt-4">
      <button className="btn btn-sm btn-outline">View Profile</button>
      <button className="btn btn-sm btn-outline ml-2">Message</button>  
    </div>
    </div>
  )
}

export default FeedComponent;