import { ADD_STUDENT } from '../constants';
import axios from 'axios';

export const addStudent = student => ({
  type: ADD_STUDENT,
  student
});


export const addNewStudent = studentName => {

  return (dispatch, getState) => {

    return axios.post('/api/students', {name: studentName})
      .then(res => res.data)
      .then(student => {
        dispatch(addStudent(student));
        hashHistory.push(`/students/${student.id}`)
      });

  };

};
