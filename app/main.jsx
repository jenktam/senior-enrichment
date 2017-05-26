'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

// import axios from 'axios';
import store from './store'

// Components
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import Students from './components/Students';
import Student from './components/Student';
import StudentsList from './components/StudentsList';
import CampusList from './components/CampusList';
import NotFound from './components/NotFound';

// Containers
import AppContainer from './containers/AppContainer'


render (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ AppContainer }>
        <Route path="/campuses" component={ Campuses } />
        <Route path="/campuses/:campusId" component={ Campus } />
        <Route path="/students" component={ Students } />
        <Route path="/students/:studentId" component={ Student } />
        <Route path="/students/StudentsList" component={ StudentsList } />
        <Route path="/campuses/CampusList" component={ CampusList } />
        <Route path="*" component={NotFound} />
        <IndexRedirect to="/campuses" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
