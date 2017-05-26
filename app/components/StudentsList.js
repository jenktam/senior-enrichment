import React from 'react';

const StudentsList = (props) => {
  const students = props.students;
  // const selectStudent = props.selectStudent;

  const allStudents = students.map(student => (
          <div className="col-xs-4" key={ student.id }>
          /* Needs this a link to redirect to a single student's info page' */
            <a className="thumbnail" href="#" onClick={() => props.selectStudent(student.id)}>
              <img src={ student.image } />
              <div className="caption">
                <h5>
                  <span>{ student.name }</span>
                </h5>
              </div>
            </a>
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
