import React from 'react';
import Campuses from '../components/Campuses';

import {addNewCampus, getAllCampuses} from '../action-creators/campuses';

const NewStudent = (props) => {

  const campuses = props.campuses;

  const nameInput = props.nameInput;
  const emailInput = props.emailInput;
  const campusInput = props.campusInput;

  const handleSubmit = props.handleSubmit;

  const nameChange = e => props.setNameInput(e.target.value);
  const emailChange = e => props.setEmailInput(e.target.value);
  const campusChange = e => props.setCampusInput(e.target.value);

  const getCampuses = () => {
    return (dispatch) => {
      return axios.get('/api/campuses')
      .then(res => {
        console.log("campuses in axios", res);
        dispatch(getCampuses(res.data))
      })
    }
  }

  const showCampuses = campuses && campuses.map(campus => (
    <option value={`${campus.id}`} key={campus.id} >{ campus.name }</option>
  ))

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Student</legend>

          <div className="form-group">

            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={nameChange}
                value={nameInput}
              />
            </div>

            <label className="col-xs-2 control-label">Email</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={emailChange}
                value={emailInput}
              />
            </div>

            <div className="col-xs-10">
              <label className="form-label">Type</label>
              <select onChange={campusChange}
              >
              {showCampuses}
              </select>
            </div>

          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button
                type="submit"
                className="btn btn-success"
              >
                Add Student
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default NewStudent;
