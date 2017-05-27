import React, { Component } from 'react';
import store from '../store';
import NewStudent from '../components/NewStudent';

import {addNewStudent} from '../action-creators/students';

export default class NewStudentContainer extends Component {
  constructor(props){
    super(props)

    this.state = Object.assign({
      nameInput: '',
      emailInput: '',
      campusInput: props.campuses[0],
      submissionAttempted: false
    }, store.getState());

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCampus = this.handleCampus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleName(name) {
    console.log("handleName!")
    this.setState({
      nameInput: name
    })
  }

  handleEmail(email) {
    this.setState({
      emailInput: email
    })
  }

  handleCampus(campusId) {
    console.log("campusId", campusId)
    this.setState({
      campusInput: campusId
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.nameInput && this.state.emailInput) {
      store.dispatch(addNewStudent(this.state.nameInput, this.state.emailInput, this.state.campusInput))
    }
    this.setState({submissionAttempted: true});
  }

  render() {
    return (
      <NewStudent
        handleSubmit={this.handleSubmit}
        setNameInput={this.handleName}
        setEmailInput={this.handleEmail}
        setCampusInput={this.handleCampus}
        campuses={this.props.campuses}
      />
    )
  }
}


  // handleCampus(chosenCampus) {
  //   const campus = chosenCampus.target;
  //   const value = campus.value;
  //   const name = campus.name;

  //   this.setState({
  //       [name]: value,
  //       submissionAttempted: false
  //   });
  // }
//         setCampusInput={this.handleCampus}
