import { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { getData } from "../utils/storageHelper";

const StudentList = () => {

  const [studentList, setStudentList] = useState([]);
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
    navigate("/student-add");
  }
  const openEditForm = (studentId) => {
    // 1) Send data using navigate state
    // navigate("/student-edit", { state: { id: studentId } });

    // 2) Send data in query string or search param
    // navigate(`/student-edit?id=${studentId}`);

    // 3) Send data in path variable or param
    // NOTE: need to to set path name in route like this  path: "/student-edit/:id"
    navigate(`/student-edit/${studentId}`);
  }

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
                <td><button type="button" onClick={() => openEditForm(student.id)} className="btn btn-primary">Edit</button></td>
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
      </div>
    </div>
  )
}

export default StudentList;