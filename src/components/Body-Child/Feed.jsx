import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addUser } from '../../Utilis/Slices/Slice';

const Feed = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const currentUser = user?.currentUser;

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
  }, [currentUser, dispatch]);

  const name = currentUser?.firstName;

  return (
    <>
      <div>Feed</div>
      <h1>Welcome, {name || 'Guest'}!</h1>
      <p>This is your feed where you can see all the latest updates.</p>
    </>
  );
};

export default Feed;
