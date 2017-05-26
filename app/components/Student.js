import React, { Component } from 'react';
// import { Link } from 'react-router';
import CampusList from '../components/CampusList';


class Student extends Component {

  componentDidMount() {
    const selectStudent = this.props.selectStudent;
    const studentId = this.props.routeParams.studentId;

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
          campuses={ student.campus }
        />
    </div>
    )
  }
}

export default Student;


/*
<Link to={`/campuses/${student.campusId}`} >Student Campus</Link>
        <h3>Student Campus: { student.campus }</h3>
*/
