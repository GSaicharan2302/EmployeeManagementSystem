import React from 'react'
import axios from 'axios'
const POST_URL="http://localhost:8094/employeemanagerservice/registeremployees";
const GET_URL="http://localhost:8094/employeemanagerservice/displayemployee/";
const GET_ALL_URL="http://localhost:8094/employeemanagerservice/displayemployees";
const POST_MANAGER_URL="http://localhost:8094/employeemanagerservice/";
const LEAVE_APPLY_URL="http://localhost:8096/leaveApproval/"
const GET_LEAVE_URL="http://localhost:8096/leaveApproval/checkstatus/"
const GET_LEAVE_LIST_URL="http://localhost:8096/leaveApproval/getemplist/"
const UPDATE_LEAVE_STATUS_URL="http://localhost:8096/leaveApproval/"
const EMPLOYEE_LIST_BY_MANAGER_URL="http://localhost:8094/employeemanagerservice/";
const EMPLOYEE_TASK_ASSIGNER_URL="http://localhost:8095/checktasks/"
const EMPLOYEE_PERMANENTID_URL="http://localhost:8094/employeemanagerservice/getpermanentid/"
class EmployeeManagerService {
  

  postEmployee=(obj)=>{
        return axios.post(POST_URL,obj);
  }

  getEmployeebyid=(id)=>{
    return axios.get(GET_URL+id);
  }

  getAllEmployees=()=>{
    return axios.get(GET_ALL_URL);
  }
  
  postEmployeeWithManager=(obj,id)=>{
    return axios.post(POST_MANAGER_URL+id,obj);
  }

  getpermanentempid=(id)=>{
    return axios.get(EMPLOYEE_PERMANENTID_URL+id);
  }

  postLeave=(id,obj)=>{
    return axios.post(LEAVE_APPLY_URL+id,obj);
  }
  getStatus=(id)=>{
    return axios.get(GET_LEAVE_URL+id);
  }

  getEmpListStatus=(mid)=>{
    return axios.get(GET_LEAVE_LIST_URL+mid);
  }

  updateLeaveApproval=(mid,eid,lid,val)=>{
          return axios.put(UPDATE_LEAVE_STATUS_URL+mid+'/'+eid+'/'+lid+'/'+val);
  }

    getEmployeeListByManager=(mid)=>{
      return axios.get(EMPLOYEE_LIST_BY_MANAGER_URL+mid);
    }

    createTaskForEmployee=(mid,eid,task_obj)=>{
      return axios.post(EMPLOYEE_TASK_ASSIGNER_URL+mid+'/'+eid,task_obj);
    }

    updateTaskStatusEmployee=(tid,value)=>{
      return axios.put(EMPLOYEE_TASK_ASSIGNER_URL+tid+'/'+value);
    }

    getTasksInfo=(eid)=>{
      return axios.get(EMPLOYEE_TASK_ASSIGNER_URL+eid);
    }
}
export default new EmployeeManagerService();
