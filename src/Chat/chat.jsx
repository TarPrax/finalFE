import axios from 'axios';
import React, { use } from 'react';
import { useParams } from 'react-router-dom';   
import { endpoint } from '../endpoint';
import { useEffect, useState } from 'react';



const Chat = () => {
  const { userId } = useParams();
useEffect(() => {
    

 const data = await axios.get(`${endpoint}/user/${userId}`, {
    withCredentials: true,
  });


  }, [userId]);
 

  return ( <div className="">
  <h1 className='text-2xl font-bold'>Chatting with {userId}</h1>


  <div class="chat chat-start">
  <div class="chat-bubble chat-bubble-primary">Hi There!!</div>
</div>

  </div>
    


  )
}

export default Chat;