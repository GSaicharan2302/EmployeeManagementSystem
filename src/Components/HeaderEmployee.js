import React from 'react'

function HeaderEmployee() {
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
export default HeaderEmployee;
