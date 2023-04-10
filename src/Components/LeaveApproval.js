import React, { useEffect, useState } from 'react'
import EmployeeManagerService from './EmployeeManagerService';
import { useParams,useHistory, Link } from 'react-router-dom';
import Header from './Header';
 function LeaveApproval() {
    const {id}=useParams();
    const [val,setval]=useState('');
    const [empid,setempid]=useState('');
    const [resarr,setresarr]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        EmployeeManagerService.getEmpListStatus(id).then((res)=>{
            setresarr(res.data);
        });
    })

    
  return (
    <>
    <Header heading="Manager Section" mid={id} />
    <div>
      <table class="table table-bordered">
        <thead>
          <th>Leave ID</th>
            <th>Employee ID</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Type</th>
            <th>Status</th>
            <th>Apply</th>
            <th>Reject</th>
        </thead>
        <tbody>
            {
                resarr.map((item)=>(<tr><td>{item.lid}</td><td>{item.emp_id}</td><td>{item.from_date}</td><td>{item.to_date}</td><td>{item.type}</td><td>{item.status}</td><td><Link to={`/acceptLeave/${id}/${item.emp_id}/${item.lid}`}><button>Accept</button></Link></td><td><Link to={`/rejectLeave/${id}/${item.emp_id}/${item.lid}`}><button >Reject</button></Link></td></tr>))
            }
        </tbody>
      </table>
    </div>
    </>
  )
}
export default LeaveApproval;
