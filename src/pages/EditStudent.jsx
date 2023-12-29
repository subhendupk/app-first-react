import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getData, setData } from '../utils/storageHelper';

export default function EditStudent() {
  // 1) to get data from state we use useLocation()
  // const location = useLocation();
  // location.state

  // 2) To get the data from search param we use useSearchParams()
  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("id")

  // 3) To get th data from path variavle or param we use useParams()
  // console.log(params.id);
  // NOTE: The path name set in route like this  path: "/student-edit/:id"

  const [selectedStudent, setSelectedStudent] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    getStudent(params.id)
  }, []);

  const getStudent = (studentId) => {
    const allStudent = getData();
    const student = allStudent.find((s) => s.id == studentId);
    console.log(studentId);
    setSelectedStudent(student);
  }


  const updateStudent = () => {
    let isUpdate = false;
    const studentList = getData();
    studentList.map((student, index) => {
      if (student.id === selectedStudent.id) {
        studentList[index] = selectedStudent;
        isUpdate = true;
        setData(studentList);
      }
    });
    if (isUpdate) {
      alert("Update success.");
    } else {
      alert("Can't Update.");
    }
    updateCloseForm();

  }
  const updateCloseForm = () => {
    navigate("/");
  }

  return (
    <>
      {selectedStudent ? <div className="myForm">
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
      </div> : <div>No student found</div>}
    </>

  )
}
