import React, { Component } from 'react';
import store from '../store';
import NewStudent from '../components/NewStudent';

import {addStudent} from '../action-creators/students';


export default class NewStudentContainer extends Component {
  constructor(props){
    super(props)

    this.state = Object.assign({
      nameInput: '',
      emailInput: ''
    }, store.getState());

    this.handleChange = this.handleChange.bind(this);
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
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      inputValue: value
    })
  }

  handleName(name) {
    this.setState({
      inputName: name
    })
  }

  handleEmail(email) {
    this.setState({
      inputEmail: email
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.inputName && this.state.handleEmail) {
      store.dispatch(addStudent())
    }
  }

  render() {
    const inputValue = this.state.inputValue;
    return (
      <NewStudent
        handleChange={this.handleChange}
        handleName={this.handleName}
        handleEmail={this.handleEmail}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
