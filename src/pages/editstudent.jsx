import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "./utils/storagehelper";
export default function Editstudent() {
  const [selectedstud, setSelectedstud] = useState(null)
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadStudent(param.id)
  }, [])

  const loadStudent = (studentId) => {
    const allStudent = getData();
    const thisStudent = allStudent.find(s => s.id == studentId);
    if (thisStudent) {
      setSelectedstud(thisStudent)
    }
  }

  const updateStudent = () => {
    // studentList.map((student, index) => {
    //   if (student.id === selectedstud.id) {
    //     setStudentlist((currentdata) => {
    //       currentdata[index] = selectedstud;
    //       return [...currentdata];
    //     });
    //   } else {
    //     alert("Can't Update");
    //   }
    // });

  };
  const closeEditForm = () => {
    navigate("/")
  };
  return (
    selectedstud?
    <div>
      <span>
        <input
          type="text"
          placeholder="NAME"
          value={selectedstud.name}
          onChange={(e) => {
            setSelectedstud((currentlist) => {
              return { ...currentlist, ...{ name: e.target.value } };
            });
          }}
        />
        <input
          type="text"
          placeholder="PHONE"
          value={selectedstud.phone}
          onChange={(e) => {
            setSelectedstud((currentlist) => {
              return { ...currentlist, ...{ phone: e.target.value } };
            });
          }}
        />
      </span>
      <br />
      <button onClick={updateStudent}>UPDATE</button>
      <button
        type="button"
        className="btn btn-danger"
        style={{ marginLeft: "5px" }}
        onClick={closeEditForm}
      >
        Close
      </button>
    </div>
    :
    <div>No Student Found</div>
  );
}