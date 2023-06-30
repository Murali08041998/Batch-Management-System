import React from 'react'
import '../App'
import { Link } from 'react-router-dom'
function Sidebar() {
  return <>
       <ul>
    <li><a class="active" href="/adduser">Add User</a></li>
    <li><a href="/edituser/:id">Edit User</a></li>
    <li><a href="/showuser">Show user</a></li>
  </ul>
  </>
}

export default Sidebar