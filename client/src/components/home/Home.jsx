import React from 'react'
import './home.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllStudent } from '../../redux/action/action'
import StudentCard from '../studentCard/StudentCard'
function Home() {
    console.log("--------------")
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    console.log("home ", state)
    useEffect(() => {
        console.log("useState")
        dispatch(getAllStudent())
    }, [])
    return (
        <div className='student-container'>
            {
                state.students && state.students.map((student) => {
                    return <StudentCard key={student._id} student={student} />
                })
            }
        </div>
    )
}

export default Home