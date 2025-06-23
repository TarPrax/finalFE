import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addUser } from '../../Utilis/Slices/Slice';
import FeedComponent from './feedComponent';
import RequestComponent from './requestComponent';


const Feed = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const currentUser = user?.currentUser;


  const[feedData, setFeedData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      if (!currentUser) {
        try {
          const response = await axios.get('http://localhost:4336/isUserLoggedIn', {
            withCredentials: true,
          });
          dispatch(addUser(response.data)); // assuming response.data contains user
        } catch (error) {
          console.error('Error fetching logged-in user:', error);
        }
      }
    };

    fetchUser();
  }, []);


  useEffect(()=>{
const feed = async () => {
  try {
    const response = await axios.get('http://localhost:4336/user/connections', {
      withCredentials: true,
    });
    console.log('Feed data:', response?.data?.data);
    setFeedData(response.data.data);
    
    // console.log(typeof response.data.data[0].firstName);
  } catch (error) {
    console.error('Error fetching feed:', error); }
  }
  feed();

  },[])

  const name = currentUser?.firstName;





  return (
    <>
    
      <div>Feed</div>
      <h1>Welcome, {name || 'Guest'}!</h1>
      <p>This is your feed where you can see all the latest updates.</p>

  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-4'>
  {feedData.length > 0 ? (
    feedData.map((item, index) => (
   
      <div key={index} className="feed-item flex flex-col items-center bg-base-200 p-4 rounded-lg shadow-md mb-4 w-100 justify-center">
       
        <RequestComponent
          firstName={item.firstName}
          lastName={item.lastName}
          emailId={item.emailId} 
            _id={item._id} />
            
      </div>
    ))
  ) : (
    <p>No new connections at the moment.</p>
  )}
</div>
    </>
  );
};

export default Feed;
