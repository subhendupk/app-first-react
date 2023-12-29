import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { getData, setData } from "../utils/storageHelper";

function StudentEditForm() {
    // process 1
    // to get value from location we use location.state
    // const location = useLocation();

    // process 2
    // to get the value from search param we use useSearchParams
    // const [serachParams, setSearchParams] = useSearchParams()

    // process 3 
    // to get the value from path variable or param we use useParams 
    // NOTE: set path name set in router like this path: "/student-editform/:id" 
    const [selectedStudent, setSelectedStudent] = useState(null);
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        // console.log(serachParams.get('id'));
        // console.log(params.id);
        getStudent(params.id);
    }, []);
    const getStudent = (studentId) => {
        const allStudent = getData();
        const student = allStudent.find((std) => {
            return std.id == studentId;
        })
        setSelectedStudent(student);
    }

    const updateStudent = () => {
        const studenList = getData();
        let isUpdate = false;
        studenList.map((student, index) => {
            if (student.id === selectedStudent.id) {
                studenList[index] = selectedStudent;
                isUpdate = true;
                setData(studenList);
            }
        });
        if (isUpdate) {
            alert('Update Success');
        }
        else {
            alert("Can't Update");
        }
        updateCloseForm();
    }

    const updateCloseForm = () => {
        navigate('/');
    }

    return (
        <>
            {selectedStudent ? <div className="container mt-4">
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
            </div> : <div>No Student Found</div>}
        </>
    )
}
export default StudentEditForm;