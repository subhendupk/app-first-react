import React, { useState } from "react";


export default function StudentList() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [studentlist, setStudentlist] = useState([]);
  const [show, setShow] = useState(false);

  const studentAdd = () => {
    // const newStudent = {'name': name, 'phone': phone}}; 
    const newStudent = { name, phone }

    setStudentlist((curentArray) => {
      curentArray.push(newStudent);
      //  return curentArray;
      return [...curentArray];
    });
    closeStudentForm();
  }

  const displayStudentForm = () => {
    setShow(true);
  }

  const closeStudentForm = () => {
    setShow(false);
    setName("");
    setPhone("");
  }

  return (
    <div>
      <div className="container">
        <h3>My State</h3>
        <h6>{name}</h6>
        <h6>{phone}</h6>
        <h6>{JSON.stringify(studentlist)}</h6>
        <h6>{show}</h6>
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
          <div className="student-form my-3">
            <div className="row">
              <div className="col mb-2">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="Enter Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div class="col mb-2">
                <label htmlFor="formGroupExampleInput" class="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone"
                  aria-label="Enter Phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }} />
              </div>
            </div>
            <button type="button" className="btn btn-success" onClick={studentAdd}>Submit</button>
            <button type="button" className="btn btn-danger" style={{ marginLeft: "5px" }} onClick={closeStudentForm}>Close</button>
          </div>
        }
      </div>
    </div>
  )
}