import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import axios from "axios";
// import Users from '../Componetns/Users';
import "./Page.css"
// import { useEffect } from 'react';
export default function Page1() {
    const [store, setStore] = useState();
    // const [filter, setFilter] = useState();
  const fetchData = () => {
    axios.get("https://randomuser.me/api/?results=50")
    // axios.get("http://localhost:4000/users")
      .then((res) => {
        setStore(res.data.results);
      }).catch((err) => console.log(err.message));
  }
  const sendDataToDatabase = () => {
  console.log(store,"store")
    fetchData()
       
    store?.length > 0 && store.map((el) => (
      axios.post("https://rich-cyan-kingfisher-yoke.cyclic.app/users", {
        name: el.name.first,
        email: el.email,
        age: el.dob.age,
        country: el.location.country,
        number: el.phone,
       gender: el.gender
      }).then((res)=>console.log(res.data)).catch(err=>console.log(err.message))
      
      // console.log(el.name.first, el.email, el.gender, el.dob.age, el.location.country, el.phone)
      // console.log(el)
    ))
    
  }
  const deleteAllRecoredData = useCallback(() => {
    axios.delete("https://rich-cyan-kingfisher-yoke.cyclic.app/users")
      .then((res) => console.log(res))
    .catch((err)=>console.log(err.message))
  },[])
  
 

   
    // console.log(filter)
  return (
    <div>
        <h1>Cointab Users Pages 1</h1>  
      <button onClick={sendDataToDatabase}>Fetch Users</button>
      <button onClick={deleteAllRecoredData}>Delete Users</button>
      <a href='User.jsx' >User Details</a>
    </div>
  )
}

/*
<table>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Number</th>
                  </tr>
             </thead>
          </table> 
*/ 