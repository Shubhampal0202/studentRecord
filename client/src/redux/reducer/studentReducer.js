import { ADD_STUDENT, GET_ALLSTUDENTS, ABOUT_STUDENT, UPDATE_STUDENT } from "../action/type"
console.log("reducer")
const initialState = {
    students: [],
    loading: false,
    error: '',
    currStudent: {}
}
export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALLSTUDENTS:
            console.log(">>>>>>>>>>>>>>>>>>>>")
            return { ...state, students: action.payload }
        case ADD_STUDENT:
            return { ...state, students: [...state.students, action.payload] }
        case ABOUT_STUDENT:
            return { ...state, currStudent: action.payload }
        case UPDATE_STUDENT:
            console.log("reducccccer")
            return { ...state, currStudent: action.payload }
        default:
            return state;
    }

}




// console.log(" >>>>>>>>. ", state, action);
// switch (action.type) {
//     case ADD_STUDENT:
//         return [...state, action.payload]
//     case GET_ALLSTUDENTS:
//         return action.payload
//     case ABOUT_STUDENT:
//         const studentId = action.payload;
//         const perticularStudent = state.find((student) => {
//             return student._id === studentId
//         })
//         return perticularStudent;
//     default:
//         return state
// }