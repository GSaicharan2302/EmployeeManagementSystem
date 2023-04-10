import logo from './logo.svg';
import './App.css';
import RegisterEmployeeSTL from './Components/RegisterEmployeeSTL';
import EmployeePageSTL from './Components/EmployeePageSTL';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import DisplayAllEmployees from './Components/DisplayAllEmployees';

import AddEmpService from './Components/AddEmpService';
import LeaveApplicationService from './Components/LeaveApplicationService';
import LeaveDetailsService from './Components/LeaveDetailsService';
import LeaveApproval from './Components/LeaveApproval';
import AcceptLeave from './Components/AcceptLeave';
import RejectLeave from './Components/RejectLeave';
import EmployeeListByManager from './Components/EmployeeListByManager';
import AssignTaskManager from './Components/AssignTaskManager';
import UpdateTaskStatus from './Components/UpdateTaskStatus';
import ViewTasks from './Components/ViewTasks';
import MainHomePage from './Components/MainHomePage';
import EmployeeHomePage from './Components/EmployeeHomePage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/registeremployees" component={RegisterEmployeeSTL}></Route>
        <Route exact path="/getempbyid/:id" component={EmployeePageSTL}></Route>
        <Route exact path="/displayallemployees" component={DisplayAllEmployees}></Route>
        <Route exact path="/addEmp/:id" component={AddEmpService}></Route>
        <Route exact path="/leaveapply/:id" component={LeaveApplicationService}></Route>
        <Route exact path="/leavestatusdetails/:id" component={LeaveDetailsService}></Route>
        <Route exact path="/leaveviewapproval/:id" component={LeaveApproval}></Route>
        <Route exact path="/acceptLeave/:id/:eid/:lid" component={AcceptLeave}></Route>
        <Route exact path="/rejectLeave/:id/:eid/:lid" component={RejectLeave}></Route>
        <Route exact path="/employeelistbymanager/:mid" component={EmployeeListByManager}></Route>
        <Route exact path="/assigntask/:mid/:eid" component={AssignTaskManager}></Route>
        <Route exact path="/updatetaskstatus/:mid" component={UpdateTaskStatus}></Route>
        <Route exact path="/viewtask/:eid" component={ViewTasks}></Route>
        <Route exact path="/" component={MainHomePage}></Route>
        <Route exact path="/employeehome" component={EmployeeHomePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
