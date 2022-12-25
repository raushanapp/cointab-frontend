import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Users from '../Componetns/Users';
import "./Page.css";
import { useCallback } from 'react';

function Pages2() {
    const [data, setData] = useState();
    const [country, setCountry] = useState('');
    const filterCountry = useCallback(() => {
        axios.get(`https://rich-cyan-kingfisher-yoke.cyclic.app/users?country=${country}`)
            .then((res) => setData(res.data))
          .catch(err => setData(err.message));
       console.log(country)
    },[country])
    const fetchData = () => {
        axios.get('https://rich-cyan-kingfisher-yoke.cyclic.app/users?country')
        .then((res) => setData(res.data))
       .catch(err => setData(err.message));
      
    }
    useEffect(() => {
        if (data?.length === 0) {
            fetchData();
        }
    }, [data?.length]);
    console.log(data);
    console.log(country);
  return (
      <div>
          <h1>Page 2</h1>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
          <button onClick={filterCountry}>click</button>
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
              {data?.length > 0 && data.map((el,index) => (
                  <Users data={ el} key={index} />
              ))}
          </table>
          <button>Fetch Users</button>
          <button>Delete Users</button>
          <button onClick={fetchData}>Users Details</button>
       
    </div>
  )
}

export default Pages2