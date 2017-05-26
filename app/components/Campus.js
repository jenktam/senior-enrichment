import React from 'react';
import StudentsList from '../components/StudentsList';

const Campus = (props) => {

  const campus = props.selectedCampus;

  return (
    <div>
      <h3>SelectedCampus View:</h3>
      <h3>{ campus.name } Campus</h3>
      <img src={ campus.image } className="img-thumbnail" />
      <StudentsList
        students={ campus.users }
        selectStudent={ props.selectstudent}
      />
    </div>
  )
}

export default Campus;
