import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function ManagerHomePage() {
    const {mid}=useParams();
  return (
    <div>
      <br></br>
      <link to={`/employeelistbymanager/${mid}`}><button>View Employees</button></link>
    </div>
  )
}
export default ManagerHomePage;
