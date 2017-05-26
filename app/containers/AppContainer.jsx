import React, { Component } from 'react';
import axios from 'axios';
import initialState from '../initialState';

// COMPONENTS
import Sidebar from '../components/Sidebar';
import Campuses from '../components/Campuses';
import Campus from '../components/Campus';
import Students from '../components/Students';
import Student from '../components/Student';
import StudentsList from '../components/StudentsList';
import CampusList from '../components/CampusList';

// CONTAINERS
import SidebarContainer from '../containers/SidebarContainer';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = initialState;

    this.selectCampus = this.selectCampus.bind(this);
    this.selectStudent = this.selectStudent.bind(this);

    // this.showAllStudents = this.showAllStudents.bind(this);
    // this.deselectCampus = this.deselectCampus.bind(this);
    // this.deselectStudent = this.deselectStudent.bind(this);
  }

  componentDidMount() {

    Promise.all([
      axios.get('/api/campuses'),
      axios.get('/api/students')
    ])
    .then(res => res.map(r => r.data))
    .then(data => this.onLoad(...data))
    .catch(console.error.bind(console));

  // Need to use promises bc async call
  //   axios.get('/api/campuses/')
  //   .then(console.log("axios call made!"))
  //   .then(res => res.data)
  //   .then(campus => this.onLoad(campus));

  //   axios.get('/api/students')
  //   .then(console.log("axios call made!"))
  //   .then(res => res.data)
  //   .then(user => this.onLoad(user));
  }

   onLoad (campuses, students) {
    this.setState({
      campuses: campuses,
      students: students
    });
  }

  selectCampus (campusId) {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        console.log("ajax campus", campus);
        this.setState({
        selectedCampus: campus
      })
    });
  }

  // check student express route if broken
  selectStudent (studentId) {
    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => this.setState({
      selectedStudent: student
    }))
  }


  render() {

    const props = Object.assign({}, this.state, {
      selectCampus: this.selectCampus,
      selectStudent: this.selectStudent
    })

    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar
          showAllStudents={this.showAllStudents}
          showStudentsView={!this.state.showCampusView}
           />
        </div>
        <div className="col-xs-10">
          {
            this.props.children && React.cloneElement(this.props.children, props)
          }
        </div>
      </div>
    );
  }
}


//           <StudentsList
          //   students = {this.state.students}
          //   selectStudent={ this.selectStudent }
          // />

// inside jof col-xs-10 div
/*
 More stuff later.
          Should show home page with all campuses info{
            this.state.showCampusView ?
              this.state.selectedCampus.id ?
              <Campus
                selectedCampus={ this.state.selectedCampus }
                selectStudent={this.selectStudent}
              /> :
              <Campuses
                campuses={ this.state.campuses }
                selectCampus={this.selectCampus}
            />
            :
            this.state.selectedStudent.id ?
            <Student
              selectedStudent={ this.state.selectedStudent }
              selectedCampus={this.selectedCampus}
            /> :
            <Students
              students={ this.state.students }
              selectStudent={ this.selectStudent }
            />
          }
*/
