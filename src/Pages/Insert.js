import React from 'react';
import { useState } from 'react';
import Supabase from '../config/SupabaseClinet';
import "./Insert.css"
const Insert = () => {

  // const navigate = useNavigate()

  const [user1,setUser1]=useState('')
  const [user2,setUser2]=useState('')
  // const [content,setContent]=useState('')
  const [formError,setFormError]= useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user1 || !user2) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await Supabase
      .from('whatsapp')
      .insert([{ user1,user2 }])

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
    }
  }
  return (
    <div className='inputs min-h-100'>
      <form onSubmit={handleSubmit} className='column'>
        {/* <label htmlFor="user1"></label> */}
        <input 
          type="text" 
          id="user1"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
          placeholder='Input your message user1'
          className='col-11'
        />
        {/* <label htmlFor="user2">user2:</label> */}
        <input 
          type="text" 
          id="user2"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
          placeholder='Input your message user2'
          className='col-11'
        />

        {/* <label htmlFor="content">content:</label> */}
        {/* <input 
          type="text" 
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Input your message'
        /> */}

        <input type="submit"/>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Insert;
