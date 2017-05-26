import React, { Component } from 'react';
import { Link } from 'react-router';
import CampusList from '../components/CampusList';


class Student extends Component {

  componentDidMount() {
    const selectStudent = this.props.selectStudent;
    const studentId = this.props.routeParams.studentId;
    console.log("students didmount");
    selectStudent(studentId);
  }

  render(){
    const student = this.props.selectedStudent;
    // const selectedCampus = this.props.selectedCampus;
    console.log("student in students.js:", student)

    return (
      <div>
        <h3>Selected Student View:</h3>
        <h3>Student Name: { student.name }</h3>
        <h3>Student Email: { student.email }</h3>
        <CampusList
          campus={ student.campus }
        />
    </div>
    )
  }
}

export default Student;
