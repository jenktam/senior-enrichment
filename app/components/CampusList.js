import React from 'react';
import { Link } from 'react-router';

const CampusList = (props) => {
  const campuses = props.campuses;
  const selectStudent = props.selectStudent;

  console.log("campuses", campuses);
  console.log("selectStudent1:", selectStudent);

  const campusInfo = (<div>hi</div>)
  // const campusInfo = campuses.map(campus => (
  //   <div className="col-xs-4" key={ campus.id }>
  //   /* Needs this a link to redirect to a single campus's info page' */
  //     <Link className="thumbnail" to={`/campuses/${campuses.id}`}>
  //       <img src={ campus.image } />
  //       <div className="caption">
  //         <h5>
  //           <span>{ campus.name }</span>
  //         </h5>
  //       </div>
  //     </Link>
  //   </div>
  // ))

  return (
    <div>
      <h3>Info about this student's campus:</h3>
      <div className="row">
        <ol>
          { campusInfo }
        </ol>
      </div>
    </div>
  )
}

export default CampusList;
