import React from 'react';

const NewStudent = (props) => {

  const nameInput = props.nameInput;
  const emailInput = props.emailInput;

  const artistChange = e => props.setArtist(e.target.value);
  const songChange = e => props.setSong(e.target.value);

  const handleChange = props.handleChange;
  const handleName = props.handleName;
  const handleEmail = props.handleEmail;
  const handleSubmit = props.handleSubmit;


  return(
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
                onChange={handleName}
                value={nameInput}
              />
            </div>

            <label className="col-xs-2 control-label">Email</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={handleEmail}
                value={emailInput}
              />
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
