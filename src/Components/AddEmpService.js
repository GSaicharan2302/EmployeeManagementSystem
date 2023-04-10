import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeManagerService from './EmployeeManagerService';
 function AddEmpService() {
    const [eid,seteid]=useState('');
    const [ename,setename]=useState('');
    const [salary,setsalary]=useState(0);
    const [Role,setrole]=useState('');
    const [Branch,setbranch]=useState('');
    const [mid,setmid]=useState('');
    const [mname,setmname]=useState('');
    const [Grade,setgrade]=useState('');
    const [branch,setmbranch]=useState('');
    const {id}=useParams();

    const [temporaryid,settemp]=useState(0)
useEffect(()=>{
    EmployeeManagerService.getEmployeebyid(id).then((res)=>{setename(res.data.name)
    
    settemp(res.data.id)})
});

const submitempdetails=()=>{
  const manager={mid,mname,Grade,branch};
    const employees={eid,ename,salary,Role,Branch,temporaryid,manager};
    
    EmployeeManagerService.postManager(employees,id).then(console.log("insertion successful"));
}
  return (
    <div>
        <br></br>
      <input type="text" placeholder="Enter employee id" onChange={(e)=>{seteid(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter employee name" value={ename}></input>
      <br></br><br></br>
      <input type="number" placeholder="Enter salary" onChange={(e)=>{setsalary(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter Role" onChange={(e)=>{setrole(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter Branch" onChange={(e)=>{setbranch(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter manager id" onChange={(e)=>{setmid(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter manager name" onChange={(e)=>{setmname(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter Grade" onChange={(e)=>{setgrade(e.target.value)}}></input>
      <br></br><br></br>
      <input type="text" placeholder="Enter branch" onChange={(e)=>{setmbranch(e.target.value)}}></input>
      <br></br><br></br>
      <button onClick={submitempdetails}>Submit the details</button>
    </div>
  )
}
export default AddEmpService
