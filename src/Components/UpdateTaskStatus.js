import React, { useState } from 'react'
import EmployeeManagerService from './EmployeeManagerService';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';

function UpdateTaskStatus() {
    const [taskid,settaskid]=useState(0);
    const [status,setstatus]=useState('');
    const {mid}=useParams();
    const updateTaskHandler=()=>{
           EmployeeManagerService.updateTaskStatusEmployee(taskid,status).then(console.log("Updated successfully")) 
    }
  return (
    <>
    <Header heading="Manager Section" mid={mid} />
    <div className="FormHandlerClass">
        <br></br> <br></br>
      <input type="number" placeholder="Enter Task ID" onChange={(e)=>{settaskid(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter Status" onChange={(e)=>{setstatus(e.target.value)}}></input>
      <br></br><br></br>
      <button onClick={updateTaskHandler}>Set status</button>
    </div>
    
    </>
  )
}
export default UpdateTaskStatus;
