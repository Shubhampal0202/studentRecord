import React, { useEffect } from 'react'
import './about.css'
import { useDispatch, useSelector } from 'react-redux'
import { aboutStudent } from '../../redux/action/action';
import { useParams } from 'react-router-dom';
import userpic from "./user.jpg"
function About() {
  const dispatch = useDispatch();
  const params = useParams();
  const studentDetails = useSelector(state => state.currStudent)
  console.log("About ", studentDetails)
  useEffect(() => {
    console.log("About useEffect")
    dispatch(aboutStudent(params._id))
  }, [])
  return (
    <>
      {
        studentDetails &&
        <div className='student-details-container'>
          <img src={userpic} alt="pic" className='profile-pic' />
          <div>
            <div><h3 className='div-h3'>Name :</h3> <div className='inline-block'>{studentDetails.name}</div></div>
            <div><h3 className='div-h3'>Roll Number :</h3> <div className='inline-block'>{studentDetails.rollNumber}</div></div>
            <div><h3 className='div-h3'>Class :</h3><div className='inline-block'>{studentDetails.Class}</div></div>
            <div><h3 className='div-h3'>Contact :</h3> <div className='inline-block'>{studentDetails.contact}</div></div>
            <div><h3 className='div-h3'>Address :</h3> <div className='inline-block'>{studentDetails.address}</div></div>
          </div>

        </div>
      }
    </>
  )
}

export default About