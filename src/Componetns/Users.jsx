import React from 'react'

function Users({data}) {
  return (
    <tr>
          <td>{ data.id}</td>
          <td>{ data.name}</td>
          <td>{ data.email}</td>
          <td>{data.country }</td>
          <td>{ data.age}</td>
          <td>{ data.number}</td>
          <td>{ data.gender}</td>
    </tr>
  )
}

export default Users