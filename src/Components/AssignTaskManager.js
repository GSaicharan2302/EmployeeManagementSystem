import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import EmployeeManagerService from './EmployeeManagerService';
import Header from './Header';

 function AssignTaskManager() {
    const {mid}=useParams();
    const {eid}=useParams();
    const [taskname,setname]=useState('');
    const [deadline,setdeadline]=useState(0);
    const [status,setstatus]=useState('');
    const [empJob,setempjob]=useState()
    const taskHandler=()=>{
        const task_obj={taskname,deadline,status,empJob}
        EmployeeManagerService.createTaskForEmployee(mid,eid,task_obj).then(console.log("Inserted successfully"));
    }
  return (
    <>
    <Header heading="Manager Section" mid={mid} str="/employeelistbymanager"/>
    <div className="FormHandlerClass" >
        <br></br><br></br>
      <input type="text" placeholder="Enter name of the task" onChange={(e)=>{setname(e.target.value)}}></input>
      <br></br><br></br>
      <input type="number" placeholder="Enter deadline" onChange={(e)=>{setdeadline(e.target.value)}}></input>
      <br></br><br></br>
      <input type="status" placeholder="Enter status of the task" onChange={(e)=>{setstatus(e.target.value)}}></input>
      <br></br><br></br>
      <button onClick={taskHandler}>Assign</button>
    </div>
    </>
  )
}
export default AssignTaskManager;
