import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Attendanceform() {
    let params = useParams()
    let navigate = useNavigate()
    const formik =useFormik({
        initialValues :{
            date : '',
            attendance : 'present',
            userid: parseInt(params.id)
        },
        onSubmit: async(values)  => {
            
            await axios.post('https://61c3d54df1af4a0017d990b1.mockapi.io/Attendance',values)
            navigate(`/attendancelist/${params.id}`)
          }
    
    })

    return (
        <>
        <form onSubmit={formik.handleSubmit}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <select  name = 'attendance'className='form-control' onChange={formik.handleChange} value={formik.values.attendance}>
                            <option value='present'>Present</option>
                            <option value='absent'>Absent</option>
                        </select>
                        
                       <input type='submit' className='btn btn-primary mt-3' />
                    </div>
                    <div className='col-lg-6'>
                                <input name='date' type='date' className='form-control' onChange={formik.handleChange} value={formik.values.date}/>
                    </div>
                </div>
            </div>
            </form>
        </>
    )
}

export default Attendanceform
