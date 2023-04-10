import React, { useEffect, useState } from 'react'
import EmployeeManagerService from './EmployeeManagerService';
import { useParams,useHistory } from 'react-router-dom';

function AcceptLeave() {
    const val="accepted";
    const {id}=useParams();
    const {eid}=useParams();
    const {lid}=useParams();
    const history=useHistory();
    useEffect(()=>{
        EmployeeManagerService.updateLeaveApproval(id,eid,lid,val).then(history.push(`/leaveviewapproval/${id}`));
    });
  return (
    <div>
      <h1>Leave {val}</h1>
    </div>
  )
}
export default AcceptLeave;
