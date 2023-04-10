import React, { useState } from 'react'
import EmployeeManagerService from './EmployeeManagerService'
import {useHistory,Link} from 'react-router-dom'
function RegisterEmployeeSTL() {
  const [id,setid]=useState(0)
    const [name,setname]=useState('')
    const [dob,setdob]=useState('')
    const [currentaddress,setcaddress]=useState('')
    const [permanentaddress,setpaddress]=useState('')
    const [contactno,setcontactno]=useState('')
    const history=useHistory();
    const clickHandler=()=>{
      const emp={name,dob,currentaddress,permanentaddress,contactno};
      EmployeeManagerService.postEmployee(emp).then((res)=>{setid(res.data.id);
        history.push(`/getempbyid/${res.data.id}`);
        console.log(res.data.id);
    })
    }
  return (

    <div className="Registration-Page">
      <h1>Registration Page</h1>
        <br></br><br></br>
      <input type="text" placeholder="Enter name of the employee" onChange={(e)=>{setname(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter date of birth" onChange={(e)=>{setdob(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter current address" onChange={(e)=>{setcaddress(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter permanent address" onChange={(e)=>{setpaddress(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter contact no" onChange={(e)=>{setcontactno(e.target.value)}}></input>
      <br></br><br></br>
      <button onClick={clickHandler}>Submit details </button>
    </div>
  )
}
export default RegisterEmployeeSTL