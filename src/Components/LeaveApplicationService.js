import React, { useState } from 'react'
import { useParams,useHistory } from 'react-router-dom'
import EmployeeManagerService from './EmployeeManagerService';
function LeaveApplicationService() {
  const [from_date,setfdate]=useState('');
  const [to_date,settdate]=useState('');
  const [no_of_days,setndays]=useState(0);
  const [type,setType]=useState('');
  const {id}=useParams();
  const history=useHistory();
  const [empLeave,setempleave]=useState()
  const leaveHandler=()=>{
          
          const leave_obj={from_date,to_date,no_of_days,type,empLeave}
          EmployeeManagerService.postLeave(id,leave_obj).then(console.log("Insertion successful"));
  }
  const updateHandler=()=>{
      history.push(`/leaveapply/${id}`);
  }
  return (
    <div>
      <br></br><br></br>
      <input type="text" placeholder="Enter From Date" onChange={(e)=>{setfdate(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter To Date"   onChange={(e)=>{settdate(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter Number of days"  onChange={(e)=>{setndays(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter Type of leave"  onChange={(e)=>{setType(e.target.value)}}></input>
      <br></br><br></br>
      <button onClick={leaveHandler}>Apply</button>
      <br></br><br></br>
      <button onClick={updateHandler}>Edit details</button>
    </div>
  )
}
export default LeaveApplicationService