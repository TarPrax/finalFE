import React from 'react';
import { useSelector } from 'react-redux';

const Test = () => {

const user = useSelector((state) => state.user);

console.log(user?.currentUser?._id);


  return (
    <div>
<p>Test</p>





    </div>
  )
}

export default Test