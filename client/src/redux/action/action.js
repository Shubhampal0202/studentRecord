import axios from "axios"
import { ADD_STUDENT, GET_ALLSTUDENTS, ABOUT_STUDENT, UPDATE_STUDENT } from "./type";
const API_URL = 'http://localhost:10000'
export const addStudent = (studentDetails) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`${API_URL}/students`, studentDetails)
            console.log("responce ", res.data);
            dispatch({ type: ADD_STUDENT, payload: res.data })
        } catch (error) {
            console.log(" Error while calling addNewStudent APi ", error.message)
        }
    }
}

export const getAllStudent = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${API_URL}/students`)
            console.log("responce ", res.data);
            dispatch({ type: GET_ALLSTUDENTS, payload: res.data })
        } catch (error) {
            console.log(" Error while calling getAllStudent APi ", error.message)
        }
    }
}

export const aboutStudent = (_id) => {
    return async (dispatch) => {
        const res = await axios.get(`${API_URL}/student/${_id}`)
        console.log(res.data)
        dispatch({ type: ABOUT_STUDENT, payload: res.data })
    }
}

export const updateStudent = (_id) => {
    return async (dispatch) => {
        const res = await axios.get(`${API_URL}/update-student/${_id}`)
        console.log(res.data)
        dispatch({ type: UPDATE_STUDENT, payload: res.data })
    }
}

export const updateDetailsInDatabase = (id,updatedDetails) => {
    return async (dispatch) => {
        const res = await axios.patch(`${API_URL}/update-details-in-database/${id}`, updatedDetails)
    }
}