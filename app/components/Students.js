import React from 'react';
import { Link } from 'react-router';

const Students = (props) => {

  const students = props.students;
  console.log("students!", students);
  const selectStudent = props.selectStudent;

  const showStudents = students.map(student => (
          <div className="col-xs-4" key={ student.id }>
            <Link to={`/students/${student.id}`}>
              <img src={ student.image } />
              <div className="caption">
                <h5>
                  <span>{ student.name }</span>
                </h5>
              </div>
            </Link>
          </div>
        ))


  const table = (
    <table className='studentsTable'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Campus</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          students && students.map(student => (
            <tr key={ student.id }>
              <td>{ student.id }</td>
              <td>{ student.name }</td>
              <td>CampusId. Should show Campus Name { student.campusId }</td>
              <td>
                <button className="btn btn-default btn-xs">
                  <span>X</span>
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )

  const addStudent = (
    <button className="btn btn-default btn-xs" onClick={() => addStudent(student)}>
      <Link to='/addStudent'
      <span className="glyphicon glyphicon-plus"></span>
    </button>
  )

  return (
    <div>
      <h3>Students</h3>
      <div className="addStudent">{ addStudent }</div>
      <div className="row">
        { table }
      </div>
    </div>
  );
}

export default Students;

