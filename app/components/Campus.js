import React, { Component } from 'react';
import StudentsList from '../components/StudentsList';

class Campus extends Component {

  componentDidMount() {
    const selectCampus = this.props.selectCampus;
    const campusId = this.props.routeParams.campusId;

    selectCampus(campusId);
  }

  render(){
    const campus = this.props.selectedCampus;

    return (
      <div>
        <h3>SelectedCampus View:</h3>
        <h3>{ campus.name } Campus</h3>
        <img src={ campus.image } className="img-thumbnail" />
        <StudentsList
          students={ campus.students }
        />
    </div>
    )
  }
}

export default Campus;
