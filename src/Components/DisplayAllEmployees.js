import React, { useEffect, useState } from 'react'
import { useParams,useHistory, Link } from 'react-router-dom'

import EmployeeManagerService from './EmployeeManagerService'

function DisplayAllEmployees() {
    const [arr,setarr]=useState([])
    const [val,setval]=useState();
    const history=useHistory();
    useEffect(()=>{
        EmployeeManagerService.getAllEmployees().then((res)=>{setarr(res.data);

        });
    })
    
  return (
    <div>
      <table  class="table table-bordered" >
        <thead>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Date of Birth </th>
            <th>Employee Current Address</th>
            <th>Employee Permanent Address</th>
            <th>Add the employee</th>
        </thead>
        <tbody>
            {arr.map((emp)=>(<tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.dob}</td>
                <td>{emp.currentaddress}</td>
                <td>{emp.permanentaddress}</td>
                <td><Link to={`/addEmp/${emp.id}`}><button>Add the employee</button></Link></td>
            </tr>))}
        </tbody>
      </table>
    </div>
  )
}
export default DisplayAllEmployees;
