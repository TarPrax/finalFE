import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';  
import FeedComponent from './feedComponent';



const Requests = () => {
const [requests, setRequests] = useState([]);

useEffect(() => {
  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:4336/user/feed', {
        withCredentials: true,
      });
      console.log('Response data:',  response.data);
      setRequests(response.data);
      console.log('Requests:', requests);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };
    fetchRequests();
},[])
  return ( <>
 
    <div>Explore the requests</div>
    {requests.length > 0 ? (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-4 gap-4  p-4'>
        {requests.map((item, index) => (
          <div key={index} className="feed-item flex flex-col items-center bg-base-200 p-4 rounded-lg shadow-md mb-4  justify-center">
        <FeedComponent
          firstName={item.firstName}
          lastName={item.lastName}
          emailId={item.emailId}  />
      </div>
        ))}
      </div>
    ) : (
      <p>No requests found.</p>
    )   }  

     </>      
)
}

export default Requests;