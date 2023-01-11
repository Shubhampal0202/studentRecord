import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addStudent } from '../../redux/action/action'
import './newStudent.css'
function NewStudent() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("new student ")
    console.log("State ", state)
    const [name, setName] = useState("")
    let [rollNumber, setRollNumber] = useState("")
    let [Class, setClass] = useState("")
    let [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        rollNumber = Number(rollNumber);
        Class = Number(Class);
        contact = Number(contact);
        const studentDetails = { name, rollNumber, Class, contact, address }
        // console.log("studentDetails ", studentDetails);
        dispatch(addStudent(studentDetails));

    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='student-name'>
                <label htmlFor="student-name">Student Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                    id="student-name" placeholder="Enter name" />
            </div>

            <div className='student-roll-number'>
                <label htmlFor="student-roll-number">Student Roll Number</label>
                <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)}
                    id="student-roll-number" placeholder="Enter roll number" />
            </div>

            <div className='student-class'>
                <label htmlFor="student-class">Student Class</label>
                <input type="text" value={Class} onChange={(e) => setClass(e.target.value)}
                    id="student-class" placeholder="Enter class" />
            </div>

            <div className='student-mobile-number'>
                <label htmlFor="student-mobile-number">Student Contact Number</label>
                <input type="text" value={contact} onChange={(e) => setContact(e.target.value)}
                    id="student-mobile-number" placeholder="Enter contact number" />
            </div>

            <div className='student-address'>
                <label htmlFor="student-address">Student Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                    id="student-address" placeholder="Enter address" />
            </div>
            <div className='form-button'>
                <button type='submit' id='form-button'>Submit</button>
            </div>
        </form>
    )
}

export default NewStudent


{/* <div className='input-container'>
                <input type="text" className='inputs' value={name}
                    onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name...' />

                <input type="text" className='inputs' value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)} placeholder='Enter Your Roll Number...' />

                <input type="text" className='inputs' value={Class}
                    onChange={(e) => setClass(e.target.value)} placeholder='Enter Your Class...' />

                <input type="text" className='inputs' value={contact}
                    onChange={(e) => setContact(e.target.value)} placeholder='Enter Your Mobile No...' />

                <input type="text" className='inputs' value={address}
                    onChange={(e) => setAddress(e.target.value)} placeholder='Enter Your Address...' />
                <button type='submit' className='button'>Submit</button>
            </div> */}