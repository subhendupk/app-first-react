import { useState } from "react";

const StudentForm = ({ setStudentList, hideForm }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [streetOne, setStreetOne] = useState('');
    const [streetTwo, setStreetTwo] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');

    const studentAdd = () => {
        const newStudent = { name, email, phone, streetOne, streetTwo, city, pin }
        const emailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (newStudent.name === '') {
            alert('Please enter Name');
        }

        else if (!emailVal.test(newStudent.email)) {
            alert('Please Enter Valid  Email');
        }
        else if (newStudent.phone.length !== 10 || !(newStudent.phone.startsWith('9') || newStudent.phone.startsWith('8') || newStudent.phone.startsWith('7') || newStudent.phone.startsWith('6'))) {
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
        hideForm(false);
        setName('');
        setEmail('');
        setPhone('');
        setStreetOne('');
        setStreetTwo('');
        setCity('');
        setPin('');
    }
    return (
        <div className="container">
            <h2 className="text-center text-decoration-underline my-4">This is StudentForm</h2>
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
        </div>
    )
}
export default StudentForm;