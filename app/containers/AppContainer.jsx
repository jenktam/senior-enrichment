import React, { Component } from 'react';
import initialState from '../initialState';
import axios from 'axios';

// COMPONENTS
import Sidebar from '../components/Sidebar';
import Campuses from '../components/Campuses';
import Campus from '../components/Campus';
import StudentsList from '../components/StudentsList';
import Students from '../components/Students';
import Student from '../components/Student';

// CONTAINERS
import SidebarContainer from '../containers/SidebarContainer';

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = initialState;

    this.selectCampus = this.selectCampus.bind(this);
    this.deselectCampus = this.deselectCampus.bind(this);
    this.selectStudent = this.selectStudent.bind(this);
    this.deselectStudent = this.deselectStudent.bind(this);
    this.showAllStudents = this.showAllStudents.bind(this);
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
      .then(res => {
        return res.data;
    })
      .then(campus => {
          console.log("campus:", campus);
        this.setState({
        selectedCampus: campus
      })
    });
  }

  deselectCampus () {
    this.setState({ selectedCampus: {}});
  }

  showAllStudents () {
    axios.get(`/api/students/`)
      .then(res => {
        return res.data;
    })
      .then(students => {
          console.log("allStudents:", students);
    });
  }

  selectStudent (studentId) {
    axios.get(`/api/students/${studentId}`)
      .then(res => {
        return res.data;
    })
      .then(student => {
          console.log("student:", student);
        this.setState({
        selectedStudent: student
      })
    });
  }

  deselectStudent () {
    this.setState({ deselectStudent: {}});
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar
          deselectCampus={this.deselectCampus}
          showAllStudents={this.showAllStudents}
           />
        </div>
        <div className="col-xs-10">
          More stuff later.
          Should show home page with all campuses info
          {
            this.state.selectedCampus.id ?
            <Campus
              selectedCampus={ this.state.selectedCampus }
              selectStudent={this.selectStudent}
            /> :
            <Campuses
              campuses={ this.state.campuses }
              selectCampus={this.selectCampus}
           />
          }

          show students
          {
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
        </div>
      </div>
    );
  }
}

//           <StudentsList
          //   students = {this.state.students}
          //   selectStudent={ this.selectStudent }
          // />
