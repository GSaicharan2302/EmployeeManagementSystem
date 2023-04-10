import React, { useEffect, useState } from 'react'
import { useParams,useHistory } from 'react-router-dom';
import EmployeeManagerService from './EmployeeManagerService';
function LeaveDetailsService() {
const [empname,setempname]=useState('');
const [frdate,setfrdate]=useState('');
const [todate,settodate]=useState('');
const [type,settype]=useState('');
const [status,setstatus]=useState('');
const [leaveresult,setresult]=useState([])
const {id}=useParams();
useEffect(()=>{
    EmployeeManagerService.getStatus(id).then((res)=>{setresult(res.data)})
})
  return (
    <>
      <table class="table table-bordered">
        <thead>
            
            <th>Employee Name</th>
            <th>From</th>
            <th>To</th>
            <th>Type of Leave</th>
            <th>Status of Approval</th>
        </thead>
        <tbody>
          {
            leaveresult.map((item)=>(<tr><td>{item.employee_name}</td><td>{item.from_date}</td><td>{item.to_date}</td><td>{item.type}</td><td>{item.status}</td></tr>))
          }
        </tbody>
      </table>
    </>
  )
}
export default LeaveDetailsService;
