import React from 'react';
import { Link } from 'react-router';

const StudentsList = (props) => {
  const students = props.students;
  const selectStudent = props.selectStudent;

  const allStudents = students && students.map(student => (
          <div className="col-xs-4" key={ student.id }>
            <Link className="thumbnail" to={`/students/${student.id}`}>
              <img src={ student.image } />
              <div className="caption">
                <h5>
                  <span>{ student.name }</span>
                </h5>
              </div>
            </Link>
          </div>
        ))

  return (
    <div>
      <h3>Students from this school are:</h3>
      <div className="row">
        <ol>
          { allStudents }
        </ol>
      </div>
    </div>
  )
}

export default StudentsList;
