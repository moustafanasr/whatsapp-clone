import Supabase from '../config/SupabaseClinet';
import React from 'react';
import "./Message.css"

const Message=({item}) =>{
  const handleDelete = async () => {
  const { error } = await Supabase
  .from('whatsapp')
  .delete()
  .eq('id', item.id)
  if(error){
    console.log(error)
  }
  }

  return (
    <div className='col-12 messages p-1'>
      {/* <h1>{item.id}</h1> */}
    <h3 className='left col-10 col-lg-7 col-md-10 col-sm-12  fs-2'>{item.user1}</h3>
    <h3 className='right col-10 col-lg-7 col-md-10 col-sm-12   fs-2'>{item.user2}</h3>
    {/* <p>{item.content}</p> */}
    <button onClick={handleDelete}>DELETE</button>

    </div>

)
  }

export default Message;
