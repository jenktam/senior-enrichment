import { ADD_CAMPUS, GET_CAMPUSES } from '../constants';
import axios from 'axios';

export const addCampus = campus => ({
  type: ADD_CAMPUS,
  campus
});

export const getCampuses = campuses=> ({
  type: GET_CAMPUSES,
  campuses
});


export const addNewCampus = (campusName, campusPhoto) => {
  console.log("campus a")
  return (dispatch) => {
    console.log("campus b")
    return axios.post('/api/campuses', {
      name: campusName,
      email: campusPhoto
    })
    .then(campus => {
      console.log("AJAX campus", campus);
      dispatch(addCampus(campus));
    });

  };

};

export const getAllCampuses = () => {
  return (dispatch) => {
    return axios.get('/api/campuses')
    .then(res => {
      console.log("campuses in axios", res);
      dispatch(getCampuses(res.data))
    })
  }
}
