import React, { Component } from 'react';
import store from '../store';
import NewStudent from '../components/NewStudent';

import {addNewStudent} from '../action-creators/students';


export default class NewStudentContainer extends Component {
  constructor(props){
    super(props)

    this.state = Object.assign({
      nameInput: '',
      emailInput: ''
    }, store.getState());

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
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
    this.setState({
      nameInput: name
    })
  }

  handleEmail(email) {
    this.setState({
      emailInput: email
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.nameInput && this.state.emailInput) {
      store.dispatch(addNewStudent(this.state.nameInput, this.state.emailInput))
    }
  }

  render() {
    return (
      <NewStudent
        handleSubmit={this.handleSubmit}
        setNameInput={this.handleName}
        setEmailInput={this.handleEmail}
      />
    )
  }
}
