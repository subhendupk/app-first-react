import { useState } from "react";

import StudentAdd from "./StudentAdd";
import StudentEdit from "./StudentEdit";

const StudentList = () => {

    const [studentList, setStudentList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [show, setShow] = useState(false);
    const [editShow, seteditShow] = useState(false);
    
    const showStudentForm = () => {
        setShow(true);
    }
    const openEditForm = (student) => {
        setSelectedStudent(student);
        seteditShow(true);
    }
    

    return (
        <div>
            <div className="container">
               <img src="data:image/png;base64,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" alt="Girl in a jacket" width="100" height="120"></img>
                <h3 className="text-center mt-3">
                    This is SignUpForm
                </h3>
                <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">E No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col" colSpan={2} style={{ textAlign: 'center' }}>Address</th>
                            <th scope="col">City</th>
                            <th scope="col">PinCode</th>
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
                {(!show ?

                    <button type="submit" className="btn btn-outline-success btn-primary" onClick={showStudentForm} style={{ color: "white", marginBottom: '20px' }}>Add</button>
                    :
                    <StudentAdd setStudentList={setStudentList} hideForm={setShow} />
                )}
                {editShow ? (
                    <StudentEdit selectedStudent={selectedStudent}
                        setSelectedStudent={setSelectedStudent}
                        showEditForm={seteditShow}
                        setStudentList={setStudentList}
                        studentList={studentList} />
                ) : null}

            </div>
        </div>
    )
}

export default StudentList;
