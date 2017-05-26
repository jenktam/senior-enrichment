import React from 'react';

const Student = (props) => {
  const student = props.selectedStudent;
  const selectedCampus = props.selectedCampus;

  return (
    <div>
      <h3>Selected Student View:</h3>
      <h3>Student Name: { student.name }</h3>
      <h3>Student Email: { student.email }</h3>
      <h3>Student Campus: { student.selectedCampus }</h3>
    </div>
  )
}

export default Student;
