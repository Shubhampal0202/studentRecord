import React from 'react'
import './studentCard.css'
import { Link } from "react-router-dom"
import { aboutStudent, updateStudent } from '../../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'
function StudentCard({ student }) {
    console.log("Student Card ")
    const dispatch = useDispatch();
    const handleClick = (_id) => {
        dispatch(aboutStudent(_id))
    }

    // const handleUpdate = (_id) => {
    //     dispatch(updateStudent(_id))
    // }
    return (
        <div className='studentCard'>
            <div className='name'>{student.name}</div>
            <div className='button-container'>
                <Link to={`/about/${student._id}`}><button className='btn'
                    onClick={() => handleClick(student._id)}>About</button>
                </Link>
                <Link to={`/update/${student._id}`}><button className='btn middle' >Update</button></Link>
                <button className='btn'>Delete</button>
            </div>
        </div>
    )
}

export default StudentCard


// onClick={() => handleUpdate(student._id)}