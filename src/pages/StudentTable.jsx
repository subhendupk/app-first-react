import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentEditForm from "./StudentEditForm";

const StudentTable = () => {
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
                {(!show ?

                    <button type="submit" className="btn btn-outline-success btn-primary" onClick={showStudentForm} style={{ color: "white", marginBottom: '20px' }}>Add</button>
                    :
                    <StudentForm setStudentList={setStudentList} hideForm={setShow} />
                )}
                {editShow ? (
                    <StudentEditForm selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} showEditForm={seteditShow} setStudentList={setStudentList} studentList={studentList} />
                ) : null}

            </div>
        </div>
    )
}

export default StudentTable;