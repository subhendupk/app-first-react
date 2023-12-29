import { useState } from "react";

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [streetOne, setStreetOne] = useState('');
    const [streetTwo, setStreetTwo] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
    const [studentList, setStudentList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [show, setShow] = useState(false);
    const [editShow, seteditShow] = useState(false);
    const studentAdd = () => {
        const newStudent = { name, email, phone, streetOne, streetTwo, city, pin }
        const emailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (newStudent.name === '') {
            alert('Please enter Name');
        }

        else if (!emailVal.test(newStudent.email)) {
            alert('Please Enter Valid  Email');
        }
        else if (newStudent.phone.length !== 10 || !(newStudent.phone.startsWith('9') || newStudent.phone.startsWith('8') || newStudent.phone.startsWith('7') || newStudent.pheditshowone.startsWith('6'))) {
            alert('Please Enter valid number');
        }
        else {
            setStudentList((currentArray) => {
                newStudent["id"] = currentArray.length + 1;
                currentArray.push(newStudent);
                return [...currentArray]
            });
            closeForm();
        }
    }
    const closeForm = () => {
        setShow(false);
        setName('');
        setEmail('');
        setPhone('');
        setStreetOne('');
        setStreetTwo('');
        setCity('');
        setPin('');
    }
    const showStudentForm = () => {
        setShow(true);
    }
    const openEditForm = (student) => {
        setSelectedStudent(student);
        seteditShow(true);
    }
    const updateStudent = () => {
        studentList.map((student, index) => {
            if (student.id === selectedStudent.id) {
                setStudentList((currentdata) => {
                    currentdata[index] = selectedStudent;
                    return [...currentdata];
                })
                updateCloseForm();

            }
            else {
                alert("Can't Update");
            }
        });
    }
    const updateCloseForm = () => {
        seteditShow(false);
        setName('');
        setEmail('');
        setPhone('');
        setStreetOne('');
        setStreetTwo('');
        setCity('');
        setPin('');
    }

    return (
        <div>
            <div className="container">
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
                    <div className="myForm">
                        <div className="row" style={{ marginBottom: '20px' }}>
                            <div className="col">
                                <label htmlFor="inputEmail4" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} required />
                            </div>
                            <div className="col">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: '20px' }}>
                            <div className="col">
                                <label htmlFor="inputEmail4" className="form-label">Phone</label>
                                <input type="number" className="form-control" placeholder="Enter Number" onChange={(e) => { setPhone(e.target.value) }} required />
                            </div>
                            <div className="col">
                                <label htmlFor="inputEmail4" className="form-label">Address Street 1</label>
                                <input type="text" className="form-control" placeholder="Enter Address Street 1" onChange={(e) => { setStreetOne(e.target.value) }} />
                            </div>
                            <div className="col">
                                <label htmlFor="inputEmail4" className="form-label">Address Street 2</label>
                                <input type="text" className="form-control" placeholder="Enter Address Street 2" onChange={(e) => { setStreetTwo(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: '20px' }}>
                            <div className="col">
                                <label htmlFor="inputEmail4" className="form-label">City</label>
                                <input type="text" className="form-control" placeholder="Enter City" onChange={(e) => { setCity(e.target.value) }} />
                            </div>
                            <div className="col">
                                <label htmlFor="inputEmail4" className="form-label">PinCode</label>
                                <input type="number" className="form-control" placeholder="Enter Pincode" onChange={(e) => { setPin(e.target.value) }} />
                            </div>
                        </div>
                        <button type="button" className="btn btn-success" style={{ marginRight: '10px' }} onClick={studentAdd}>Submit</button>
                        <button type="button" className="btn btn-danger" onClick={closeForm}>Cancel</button>
                    </div>
                )}
                {editShow ? (
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
                ) : null}

            </div>
        </div>
    )
}

export default SignUpForm;