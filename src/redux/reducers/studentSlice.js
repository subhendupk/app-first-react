import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const studentSlice = createSlice({
    name: 'allstudents',
    initialState,
    reducers: {
        addStudent: (state, newStudent) => {
            const mystudent = state.push(newStudent.payload);
        },
        updateStudent: (state) => {
            // state.value -= 1
        },
        deleteStudent: (state) => {
            // state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions

export default studentSlice.reducer
