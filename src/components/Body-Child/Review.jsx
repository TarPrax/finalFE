import React, { useEffect,useState } from 'react';
import axios from 'axios';
import ReviewComponent from './reviewComponent';


      

const Review = () => {

const[reviewData, setReviewData] = useState([]);


useEffect(() => {
  const fetchReviewData = async () => {
    try {
      const response = await axios.get('http://localhost:4336/user/requests/received', {
        withCredentials: true,
      });
      console.log('Review data:', response.data.data[0]._id);
      setReviewData(response.data.data);
      console.log('Review data:', reviewData);
    } catch (error) {
      console.error('Error fetching review data:', error);
    }
  };

  fetchReviewData();
}, []);

  return (
    <>

<ReviewComponent reviewData={reviewData[0]} />

    </>
  )
}

export default Review;