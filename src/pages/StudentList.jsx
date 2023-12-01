import React, { useState } from "react";
import AddStudent from "./addstudent";


export default function StudentList() {
  const [studentlist, setStudentlist] = useState([]);
  const [show, setShow] = useState(false);


  const displayStudentForm = () => {
    setShow(true);
  }

  const closeStudentForm = () => {
    setShow(false);
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
            </tr>
          </thead>
          <tbody>
            {studentlist.map((student, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
              </tr>
            })}

          </tbody>
        </table>
        {!show ?
          <div>
            <button type="button" className="btn btn-success" onClick={displayStudentForm}>Add</button>
          </div>
          :
          <AddStudent setStudentlist={setStudentlist} hideForm={closeStudentForm} />
        }
      </div>
    </div>
  )
}