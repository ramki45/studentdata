import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Attendancelist() {
    let params = useParams()

    const[attendance,setAttendance] =useState([])
    useEffect(async() => {
       try {
        let result = await fetch(`https://61c3d54df1af4a0017d990b1.mockapi.io/Attendance/?userid=${params.id}`)
        let data = await result.json();
        setAttendance(data);
       } catch (error) {
           console.log('error')
       }
        
       
    }, [])
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Attendance List</h1>
                        <Link to={`/attendanceform/${params.id}`} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i>Add Attendance</Link>
                    </div>
        
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                                                 </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            
                                            <th>Date</th>
                                            <th>Attendance</th>

                                        </tr>
                                    </thead>
                                    
                                    <tbody> {
                                        attendance.map((obj)=>{
                                            return  <tr>
                                            
                                            <td>{obj.date}</td>
                                            <td>{obj.attendance}</td>
                                            
                                            
                                           
                                        </tr>



                                        })
                                       
                                        
                                        }
                                         
                            
                                            
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Attendancelist
