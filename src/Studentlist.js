import React from 'react'
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

function Studentlist() {
    const[state,setState]=useState([])

    useEffect(async() => {
       try {
        let data = await fetch('https://61c3d54df1af4a0017d990b1.mockapi.io/StudentData')
        let result = await data.json();
        setState(result)
       } catch (error) {
           console.log('error');
       }
       




    }, [])


    return (
        <>
         <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Student List</h1>
                        <a href=" " className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
        
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Name</th>
                                            
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>S.no</th>
                                            <th>Name</th>
                                           
                                            <th>Action</th>
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            
                                        state.map((student)=>{
                                            return <tr>
                                            
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <Link to={`/attendancelist/${student.id}`}>

                                                <td><button className="btn btn-primary">View</button></td>
                                                </Link>
                                                </tr>
                                        })
                                            
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

        
        
        
        
    
        </>
        )
}

export default Studentlist
