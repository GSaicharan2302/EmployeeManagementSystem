import React, { useEffect, useState } from 'react'
import EmployeeManagerService from './EmployeeManagerService';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';

function EmployeeListByManager() {
    const [arr,setarr]=useState([]);
    const {mid}=useParams();
    useEffect(()=>{
            EmployeeManagerService.getEmployeeListByManager(mid).then((res)=>{
                setarr(res.data);
            });
    });
  return (
    <>
    <Header heading="Manager Section" mid={mid}/>
    <div className="FormHandlerClass">
      <table class="table table-bordered">
        <thead>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Assign Task</th>
            <th>Update Task status</th>
            
        </thead>
        <tbody>
            {
                arr.map((item)=>(<tr><td>{item.id}</td><td>{item.name}</td><td><Link to={`/assigntask/${mid}/${item.id}`}><button>Assign Task</button></Link></td><td><Link to={`/updatetaskstatus/${mid}`}><button>Update Task status</button></Link></td></tr>))
            }
        </tbody>
      </table>
      <Link to={`/leaveviewapproval/${mid}`}><button>Check Leave status</button></Link>
    </div>
    </>
  )
}
export default EmployeeListByManager;
