import React from 'react'
import { Link } from 'react-router-dom';

function HeaderEmployeeHomePage(props) {
    const linkstyle={
        margin:"5px",
        color:"blue"
        
    }
  return (
    <div className="Header-EmployeeHome">
        <nav>
        <Link style={linkstyle} to={`/`}>Logout</Link>
        <Link style={linkstyle} to={`/`}>Go back</Link>
        <Link style={linkstyle} to={`/`}>Home</Link>
        </nav>
      <h1>Employee Section</h1>
      <br></br>
      
    </div>
  )
}
export default HeaderEmployeeHomePage;
