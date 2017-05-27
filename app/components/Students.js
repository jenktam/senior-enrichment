import React from 'react';
import { Link } from 'react-router';

const Students = (props) => {

  const students = props.students;
  const selectStudent = props.selectStudent;
  console.log("students should have student.campus.name", students);
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
              <td>
                <Link to={`/students/${student.id}`}>
                  { student.name }
                </Link>
              </td>
              <td>{ student.campus.name }</td>
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
    <Link className="btn btn-default btn-xs" to="/new-student">
      <span className="glyphicon glyphicon-plus"> Student</span>
    </Link>
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

