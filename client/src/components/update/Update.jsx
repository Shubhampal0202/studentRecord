import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';
import { updateDetailsInDatabase } from '../../redux/action/action'
import { updateStudent } from '../../redux/action/action';
import { useParams } from 'react-router-dom';
function Update() {
    const studentDetails = useSelector(state => state.currStudent)
    const dispatch = useDispatch();
    console.log("update-student ", studentDetails);
    const params = useParams()
    const [name, setName] = useState("")
    let [rollNumber, setRollNumber] = useState("")
    let [Class, setClass] = useState("")
    let [contact, setContact] = useState("")
    const [address, setAddress] = useState("")

    const handleUpdate = () => {
        const updatedDetails = { name, rollNumber, class: Class, contact, address };
        const id = studentDetails._id
        dispatch(updateDetailsInDatabase(id,updatedDetails));
    }
    useEffect(() => {
        console.log("update useEffect")
        dispatch(updateStudent(params._id))
        setName(studentDetails.name)
        setRollNumber(studentDetails.rollNumber)
        setClass(studentDetails.Class);
        setContact(studentDetails.contact);
        setAddress(studentDetails.address);
       
    }, [])
    return (
        <form className='form' onSubmit={handleUpdate}>
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

export default Update