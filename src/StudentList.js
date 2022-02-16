import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function StudentList() {
    const [Students,setStudents] = useState([])
    useEffect(async () => {
        try {
            let studentData = await fetch("https://619a30ba9022ea0017a7b085.mockapi.io/attendance")
            let studentList = await studentData.json();
            setStudents(studentList)
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Student List</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
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
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    Students.map((student)=>{
                                        return <tr>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>
                                            <img src={student.avatar} />
                                        </td>
                                        <td>
                                            <Link to={`/student/${student.id}`}><button class='btn btn-primary'>View</button></Link>
                                        </td>
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

export default StudentList
