import React from 'react'
import { Link } from 'react-router-dom';

function EmployeeHomePage() {
  const linkemp={
    color:"red"
  }
  return (
    <div className="EmployeeHome">
      <h2>Employee Login</h2>
      <br></br><br></br>
      <input type="text" placeholder="Enter Username"></input>
      <br></br><br></br>
      <input type="password" placeholder="Enter Password"></input>
      <br></br><br></br>
      <button>Submit</button>
      <br></br><br></br>
      <Link style={linkemp} to={`/registeremployees`}>Sign up</Link>
      <br></br>
    </div>
  )
}
export default EmployeeHomePage;
