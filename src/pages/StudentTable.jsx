import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import StudentEditForm from "./StudentEditForm";
import { useNavigate } from "react-router";
import { getData, setData } from "../utils/storageHelper";

const StudentTable = () => {
    const [studentList, setStudentList] = useState([]);
    const [show, setShow] = useState(false);
    const [editShow, seteditShow] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const allStudent = getData();
        setStudentList(allStudent);
    }, []);

    const showStudentForm = () => {
        // setShow(true);
        navigate("/student-form");
    }

    const openEditForm = (studentId) => {
        // send data in  query string or search param
        // navigate(`/student-editform?id=${studentId}`);


        // send data in path varible or param
        // NOTE: need to set path name in route like this path: "/student-editform/:id"
        navigate(`/student-editform/${studentId}`);

        // setSelectedStudent(student);
        // seteditShow(true);
    }
    const deleteStudent = (studentId) => {
        const updatedStudent = studentList.filter((student) => {
            return student.id !== studentId;
        })
        let text = "You are sure?"
        if (window.confirm(text)) {
            setData(updatedStudent);
            setStudentList(updatedStudent);
            navigate('/');
        }
        else {
            navigate('/');
        }
    }

    return (
        <div>
            <div className="container">
                <h3 className="text-center mt-3">
                    This is StudentList
                </h3>
                <table className="table">
                    <thead>
                        <tr className="table-dark text-center">
                            <th scope="col">E No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col" colSpan={4}>Address</th>
                            <th scope="col" colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((student, index) => {
                            return <tr key={index} className="text-center">
                                <td>{index + 1}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.streetOne}</td>
                                <td>{student.streetTwo}</td>
                                <td>{student.city}</td>
                                <td>{student.pin}</td>
                                <td><button type="button" onClick={() => openEditForm(student.id)} className="btn btn-primary">Edit</button></td>
                                <td><button className="btn btn-danger" onClick={() => {
                                    deleteStudent(student.id)
                                }}>Delete</button></td>

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