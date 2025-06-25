import React, { useEffect,useState } from 'react';
import axios from 'axios';
import RequestComponent from './requestComponent';


      

const Review = () => {

const[reviewData, setReviewData] = useState([]);


useEffect(() => {
  const fetchReviewData = async () => {
    try {
      const response = await axios.get('http://localhost:4336/user/requests/received', {
        withCredentials: true,
      });
      console.log('Review data: 1', response.data.data);
      setReviewData(response.data.data);
      console.log('Review data: 2', reviewData);
    } catch (error) {
      console.error('Error fetching review data:', error);
    }
  };

  fetchReviewData();
}, []);



  return (
    <>
      <div className="flex flex-col items-center  min-h-screen bg-base-100">
        <h1 className="text-2xl font-bold mb-4">Review Requests</h1>
        <div className="w-full max-w-4xl">
          {reviewData.length > 0 ? (
            reviewData.map((item) => (
              <RequestComponent
                key={item._id}
                connectionStatus={item.connectionStatus}  // Pass connectionStatus
                fromUserId={item.fromUserId}  // Pass fromUserId separately
              />
            ))
          ) : (
            <p className="text-gray-500">No review requests available.</p>
          )}
        </div>
      </div>  

    </>
  )
}

export default Review;