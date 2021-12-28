import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './Sidebar.js'
import Dashboard from './Dashboard';
import Topbar from './Topbar';
import './Attendance.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reactDom from 'react-dom';
import Studentlist from './Studentlist';
import Attendancelist from './Attendancelist';
import Attendanceform from './Attendanceform';
function App() {
  return (
    <div id='wrapper'>
      <BrowserRouter>

      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path='/studentlist' element={<Studentlist/>} ></Route>
                <Route path='/attendancelist/:id' element={<Attendancelist/>} ></Route>
                <Route path='/attendanceform/:id' element={<Attendanceform></Attendanceform>}></Route>

            </Routes>
            
            
          </div>

        </div>
      </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
