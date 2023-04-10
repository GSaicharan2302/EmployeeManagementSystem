import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
  const linkstyle={
      margin:"5px",
      color:"red"
      
  }
  const mid=props.mid;
  const str=props.string_char;
  // const logout_url=props.logout
  // const home_url=props.home
  // const goback_url=props.goback
  return (
    <div className="HeaderClass">
      <nav>
        <Link style={linkstyle} to={`/`}>Logout</Link>
        <Link style={linkstyle} to={`/employeelistbymanager/${mid}`}>Go back</Link>
        <Link style={linkstyle} to={`/employeelistbymanager/${mid}`}>Home</Link>
      </nav>
        <h1>{props.heading}</h1>
    </div>
  )
}
export default Header;
