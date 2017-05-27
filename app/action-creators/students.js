import { ADD_STUDENT, DELETE_STUDENT } from '../constants';
import axios from 'axios';

export const addStudent = student => ({
  type: ADD_STUDENT,
  student
});

export const deleteStudent = student => ({
  type: DELETE_STUDENT,
  student
});

export const addNewStudent = (studentName, studentEmail, studentCampusId) => {
  return (dispatch) => {
    return axios.post(`/api/students/`, {
      name: studentName,
      email: studentEmail,
      campusId: studentCampusId
    })
    .then(student => {
      dispatch(addStudent(student));
    });
  };
};

export const deleteSelectedStudent = (studentId) => {
  console.log("a")
  return (dispatch) => {
    console.log("b")
    return axios.get(`/api/students/${studentId}`, {
    })
    .then(student => {
      dispatch(deleteStudent(student));
    });
  };
};
