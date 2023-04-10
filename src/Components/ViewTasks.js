import React, { useEffect, useState } from 'react'
import EmployeeManagerService from './EmployeeManagerService';
import { useParams } from 'react-router-dom';

 function ViewTasks() {
    const {eid}=useParams();
    const [result,setres]=useState([]);
    useEffect(()=>{
        EmployeeManagerService.getTasksInfo(eid).then((response)=>{setres(response.data)});
    })
  return (
    <div>
      <table class="table table-bordered">
        <thead>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Task Name</th>
            <th>Status</th>
        </thead>
        <tbody>
            {
                result.map((item)=>(<tr><td>{item.eid}</td><td>{item.ename}</td><td>{item.taskname}</td><td>{item.status}</td></tr>))
            }
        </tbody>
      </table>
    </div>
  )
}
export default ViewTasks;
