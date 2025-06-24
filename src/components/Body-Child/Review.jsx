import React, { useEffect,useState } from 'react';
import axios from 'axios';


      

const Review = () => {

const[reviewData, setReviewData] = useState([]);


useEffect(() => {
  const fetchReviewData = async () => {
    try {
      const response = await axios.get('http://localhost:4336/user/requests/received', {
        withCredentials: true,
      });
      console.log('Review data:', response.data);
    } catch (error) {
      console.error('Error fetching review data:', error);
    }
  };

  fetchReviewData();
}, []);

  return (
    <div>Review</div>
  )
}

export default Review;