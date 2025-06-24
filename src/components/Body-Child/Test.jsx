import React from 'react';
import { useSelector } from 'react-redux';

const Test = () => {

const user = useSelector((state) => state.user);

console.log(user);


  return (
    <div>
<p>{user?.currentUser?.firstName || "No user logged in"}</p>
<p>{user?.currentUser?.lastName || "No user logged in"}</p> 
<p>{user?.currentUser._id}</p>





    </div>
  )
}

export default Test