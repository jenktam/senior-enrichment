import React from 'react';

const Students = (props) => {

  const students = props.students;
  const selectStudent = props.selectStudent;

  const showStudents = students.map(student => (
          <div className="col-xs-4" key={ student.id }>
            <a className="thumbnail" href="#" onClick={() => selectStudent(student.id)}>
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
      <h3>Students</h3>
      <div className="row">
        { showStudents }
      </div>
    </div>
  );
}

export default Students;

