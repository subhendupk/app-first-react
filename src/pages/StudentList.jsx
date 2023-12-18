import { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { getData } from "../utils/storageHelper";

const StudentList = () => {

  const [studentList, setStudentList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [show, setShow] = useState(false);
  const [editShow, seteditShow] = useState(false);
  const [submitText, setSubmitText] = useState("Add");

  const navigate = useNavigate();

  useEffect(() => {
    const allStudent = getData();
    setStudentList(allStudent);
  }, []);

  const hideStudentForm = () => {
    setShow(false);
  }
  const showStudentForm = () => {
    // setShow(true);
    // navigate("/student-add", { state: { studentList: studentList } });
    navigate("/student-add");
  }
  const openEditForm = (student) => {
    setSelectedStudent(student);
    seteditShow(true);
  }
  // const updateStudent = () => {
  //   studentList.map((student, index) => {
  //     if (student.id === selectedStudent.id) {
  //       setStudentList((currentdata) => {
  //         currentdata[index] = selectedStudent;
  //         return [...currentdata];
  //       })
  //       updateCloseForm();

  //     }
  //     else {
  //       alert("Can't Update");
  //     }
  //   });
  // }
  // const updateCloseForm = () => {
  //   seteditShow(false);
  //   setName('');
  //   setEmail('');
  //   setPhone('');
  //   setStreetOne('');
  //   setStreetTwo('');
  //   setCity('');
  //   setPin('');
  // }

  return (
    <div className="hello">
      <div className="container">
        <h3 className="text-center mt-3">
          This is StudentList
        </h3>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">E No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col" colSpan={4} style={{ textAlign: 'center' }}>Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.streetOne}</td>
                <td>{student.streetTwo}</td>
                <td>{student.city}</td>
                <td>{student.pin}</td>
                <td><button type="button" onClick={() => openEditForm(student)} className="btn btn-primary">Edit</button></td>
              </tr>
            })}
          </tbody>
        </table>
        <SubmitButton onClickHandeler={() => setSubmitText("Submit")} name={"change text"} className="btn btn-outline-warning btn-default" />
        {(!show ?
          <SubmitButton onClickHandeler={showStudentForm} name={submitText} className="btn btn-outline-success btn-default" />
          // <button type="submit" className="btn btn-outline-success btn-primary" onClick={showStudentForm} style={{ color: "white", marginBottom: '20px' }}>Add</button>
          :
          <AddStudent setStudentList={setStudentList} hideForm={hideStudentForm} />
        )}
        {/* {editShow ? (
          <div className="myForm">
            <div className="row" style={{ marginBottom: '20px' }}>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" value={selectedStudent.name} required
                  onChange={(event) => {
                    setSelectedStudent((currentValue) => {
                      return { ...currentValue, ...{ name: event.target.value } };
                    })
                  }}
                />
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter Email" value={selectedStudent.email} required
                  onChange={(event) => {
                    setSelectedStudent(currentValue => {
                      return { ...currentValue, ...{ email: event.target.value } }
                    })
                  }}
                />
              </div>
            </div>
            <div className="row" style={{ marginBottom: '20px' }}>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">Phone</label>
                <input type="number" className="form-control" placeholder="Enter Number" value={selectedStudent.phone} required
                  onChange={(event) => {
                    setSelectedStudent(currentValue => {
                      return { ...currentValue, ...{ phone: event.target.value } }
                    });
                  }}
                />
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">Address Street 1</label>
                <input type="text" className="form-control" placeholder="Enter Address Street 1" value={selectedStudent.streetOne}
                  onChange={(event) => {
                    setSelectedStudent(currentValue => {
                      return { ...currentValue, ...{ streetOne: event.target.value } }
                    });
                  }}
                />
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">Address Street 2</label>
                <input type="text" className="form-control" placeholder="Enter Address Street 2" value={selectedStudent.streetTwo}
                  onChange={(event) => {
                    setSelectedStudent(currentValue => {
                      return { ...currentValue, ...{ streetTwo: event.target.value } }
                    });
                  }}
                />
              </div>
            </div>
            <div className="row" style={{ marginBottom: '20px' }}>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">City</label>
                <input type="text" className="form-control" placeholder="Enter City" value={selectedStudent.city}
                  onChange={(event) => {
                    setSelectedStudent(currentValue => {
                      return { ...currentValue, ...{ city: event.target.value } }
                    });
                  }}

                />
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">PinCode</label>
                <input type="number" className="form-control" placeholder="Enter Pincode" value={selectedStudent.pin}
                  onChange={(event) => {
                    setSelectedStudent(currentValue => {
                      return { ...currentValue, ...{ pin: event.target.value } }
                    });
                  }}
                />
              </div>
            </div>
            <button type="button" className="btn btn-success" style={{ marginRight: '10px' }} onClick={updateStudent}>Update</button>
            <button type="button" className="btn btn-danger" onClick={updateCloseForm}>Cancel</button>
          </div>
        ) : null} */}

      </div>
    </div>
  )
}

export default StudentList;