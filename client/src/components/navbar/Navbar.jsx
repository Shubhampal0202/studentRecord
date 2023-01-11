import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
    return (
        <div>
            <ul className="navbar">
                <div className='logo'>
                    <li >STUDENTS RECORD</li>
                </div>
                <div className='routes'>
                    <li>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='link' to="/newstudent">Add New Student</Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar