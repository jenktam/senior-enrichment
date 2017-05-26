import React from 'react';

const Campuses = (props) => {

  const campuses = props.campuses;
  const selectCampus = props.selectCampus;

  const showCampuses = campuses.map(campus => (
          <div className="col-xs-4" key={ campus.id }>
            <a className="thumbnail" href="#" onClick={() => selectCampus(campus.id)}>
              <img src={ campus.image } />
              <div className="caption">
                <h5>
                  <span>{ campus.name }</span>
                </h5>
              </div>
            </a>
          </div>
        ))


  return (
    <div>
      <h3>Campuses</h3>
      <div className="row">
        { showCampuses }
      </div>
    </div>
  );
}

export default Campuses;

