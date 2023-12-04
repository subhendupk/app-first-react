import { useState } from "react";

const StudentEditForm = ({ selectedStudent, setSelectedStudent, showEditForm, setStudentList, studentList }) => {
    const updateStudent = () => {
        let isUpdated = false;
        studentList.map((student, index) => {
            if (student.id === selectedStudent.id) {
                setStudentList((currentdata) => {
                    currentdata[index] = selectedStudent;
                    return [...currentdata];
                });
                isUpdated = true;
            }
        });
        if (isUpdated) {
            alert('Updated Successfully');
        }
        else {
            alert('Not Updated');
        }
        updateCloseForm();
    }

    const updateCloseForm = () => {
        showEditForm(false);
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center text-decoration-underline my-4">This is StudentEditForm</h2>
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
        </div>
    )
}
export default StudentEditForm;