import React, { useEffect, useState } from 'react'
import { useParams,useHistory } from 'react-router-dom';
import EmployeeManagerService from './EmployeeManagerService';

import HeaderEmployee from './HeaderEmployee';
import HeaderEmployeeHomePage from './HeaderEmployeeHomePage';
function EmployeePageSTL() {
    const {id}=useParams()
    const history=useHistory();
    const [name,setename]=useState()
    const [caddress,setcurrent]=useState()
    const [dateofbirth,setdateofbirth]=useState()
    const [paddress,setpermanent]=useState()
    const [contact,setcontact]=useState()
    useEffect(()=>{
          EmployeeManagerService.getEmployeebyid(id).then(
            (res)=>{
              setename(res.data.name);
              setcurrent(res.data.currentaddress);
              setdateofbirth(res.data.dob);
              setpermanent(res.data.permanentaddress);
              setcontact(res.data.contactno);
            }
          )
    })

    const updatedetails=()=>{
      history.push(`/`);
    }
    const leavedetails=()=>{
      history.push(`/leaveapply/${id}`);
    }

    const checktasks=()=>{
      EmployeeManagerService.getpermanentempid(id).then((res)=>{history.push(`/viewtask/${res.data}`)});
    }

    const checkleavestatus=()=>{
      EmployeeManagerService.getpermanentempid(id).then((res)=>{history.push(`/leavestatusdetails/${res.data}`)});
    }
    return(
      <>
      <HeaderEmployeeHomePage name={name}/>
      <br></br>
      <table class="table table-bordered">
        <thead>
          <th align='center'>Your details</th>
        </thead>
        <tbody>
          <tr>
            <td>Employee Name:</td>
            <td>{name}</td>
           
          </tr>
          <tr>
            <td>Employee Date of birth:</td>
            <td>{dateofbirth}</td>
           
          </tr>
          <tr>
            <td>Employee Current address:</td>
            <td>{caddress}</td>
           
          </tr>
          <tr>
            <td>Employee Permanent address:</td>
            <td>{paddress}</td>
           
          </tr>
          <tr>
            <td>Employee Contact no:</td>
            <td>{contact}</td>
           </tr>
        </tbody>
      </table>
      <button onClick={updatedetails}>Update details</button>
      <br></br><br></br>
      <button onClick={leavedetails}>Apply Leave</button>
      <br></br><br></br>
      <button onClick={checktasks}>Check Task Status</button>
      <br></br><br></br>
      <button onClick={checkleavestatus}>Check Leave Status</button>
      </>
    )
}
export default EmployeePageSTL;
