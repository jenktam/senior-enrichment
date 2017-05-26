import { ADD_STUDENT } from '../constants';
import axios from 'axios';

export const addStudent = student => ({
  type: ADD_STUDENT,
  student
});


export const addNewStudent = (studentName, studentEmail) => {
  console.log("a")
  return (dispatch) => {
    console.log("b")
    return axios.post('/api/students', {
      name: studentName,
      email: studentEmail
    })
    .then(res => res.data)
    .then(student => {
      console.log("AJAX Student", student);
      dispatch(addStudent(res.data));
      hashHistory.push(`/students/${student.id}`)
    });

  };

};
