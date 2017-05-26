import React from 'react';
import { Link } from 'react-router';

const CampusList = (props) => {
  const campus = props.campus;
  const selectStudent = props.selectStudent;

  /* When student.campus from Student.js runs the first time, student is an empty object and campus is undefined. Therefore, need to define campus in initialState.js
  */
  const campusInfo = (
    <div className="col-xs-4" key={ campus.id }>
      <Link className="thumbnail" to={`/campuses/${campus.id}`}>
        <img src={ campus.image } />
        <div className="caption">
          <h5>
            <span>{ campus.name }</span>
          </h5>
        </div>
      </Link>
    </div>
  )

  return (
    <div>
      <h3>Info about this student's campus:</h3>
      <div className="row">
          { campusInfo }
      </div>
    </div>
  )
}

export default CampusList;
