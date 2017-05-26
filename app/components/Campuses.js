import React from 'react';
import { Link } from 'react-router';

const Campuses = (props) => {

  const campuses = props.campuses;
  const selectCampus = props.selectCampus;

  const showCampuses = campuses && campuses.map(campus => (
          <div className="col-xs-4" key={ campus.id }>
            <Link className="thumbnail" href="#" to={`/campuses/${campus.id}`}>
              <img src={ campus.image } />
              <div className="caption">
                <h5>
                  <span>{ campus.name }</span>
                </h5>
              </div>
            </Link>
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

