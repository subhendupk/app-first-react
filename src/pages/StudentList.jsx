import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "./utils/storagehelper";
export default function StudentList() {
  const [studentlist, setStudentlist] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const allstudent = getData();
    setStudentlist(allstudent);
  }, []);

  const displayStudentForm = () => {
    navigate("/student-add")
  }

  const editstudent = (studentId) => {
    navigate(`/edit-student/${studentId}`);
  }

  return (
    <div>
      <div className="container">
        <h3>List Of Student</h3>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">E No</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {studentlist.map((student, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td><button type="button" className="btn btn-success" onClick={() => editstudent(student.id)}>Edit</button></td>
              </tr>
            })}

          </tbody>
        </table>
        <div>
          <button type="button" className="btn btn-success" onClick={displayStudentForm}>Add</button>

        </div>
      </div>
    </div>
  )
}