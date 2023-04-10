import React from 'react'
import { useParams,useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import EmployeeManagerService from './EmployeeManagerService';
function RejectLeave() {
    const value="rejected";
    const {id}=useParams();
    const {eid}=useParams();
    const {lid}=useParams();
    const history=useHistory();
    useEffect(()=>{
        EmployeeManagerService.updateLeaveApproval(id,eid,lid,value).then(history.push(`/leaveviewapproval/${id}`));
    });
  return (
    <div>
        <h1>{id}</h1>
        <h1>{eid}</h1>
       <h1>Leave {value}</h1>
    </div>
  )
}
export default RejectLeave;