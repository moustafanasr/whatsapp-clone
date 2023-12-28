// import Supabase from "../config/SupabaseClinet";
import { useState, useEffect } from "react";
import React from 'react';
import Message from "./Message";
import Supabase from "../config/SupabaseClinet";
import Insert from "./Insert";
import './Home.css';
const Home = () => {

  const [fetchError, setFetchError] = useState(null)
  const [mess, setMess] = useState(null)

  useEffect(() => {
    const fetchMes = async () => {
      const { data, error } = await Supabase
        .from('whatsapp')
        .select('*')

      if (error) {
        setFetchError("could not fetch")
        setMess(null)
        console.log("notfound");
      }
      if (data) {
        setMess(data)
        setFetchError(null)
      }
      // console.log(data)
    }
    fetchMes()
  }, [])

  return (
    <div className="col-12 min-h-100 align-content-start home">
      {fetchError && (<p>{fetchError}</p>)}
      <div className="col-lg-5 col-md-6 col-sm-12 col-12 inputs">
        <Insert />
      </div>
      {mess &&
        (
          <div className="col-12 col-lg-7 col-md-6 col-sm-12 message-home">
            {mess.map(item => (
              <Message key={item.id} item={item} />
            ))}
          </div>
        )
      }
    </div>
  );
}

export default Home;
