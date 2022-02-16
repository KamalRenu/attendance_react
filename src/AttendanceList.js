import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

function AttendanceList() {
    const [attendance, setAttendance] = useState([])
    let params = useParams()
    useEffect(async () => {
        try {
            let attendanceData = await fetch(`http://localhost:3001/attendance?studentId=${params.id}`)
            let attendanceList = await attendanceData.json()
            setAttendance(attendanceList)
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Student List</h1>
                <Link to={`/add-attendance/${params.id}`} href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Add Attendance</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    attendance.map((attendance)=>{
                                        return <tr>
                                        <td>{attendance.attendance}</td>
                                        <td>{attendance.date}</td>
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

export default AttendanceList
