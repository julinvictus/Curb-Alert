import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ShowPics from './components/ShowPics';
import ShowPicById from './components/ShowPicById';
import ShowMap from './components/ShowMap';
import UploadPic from './components/UploadPic';
import TakePic from './components/TakePic';
//import Claimed from './components/Claimed';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path='/' component={} /> */}
          <Route path='/show-pics' component={ShowPics} />
          <Route path='/show-pic-by-id/:id' component={ShowPicById} />
          <Route path='/show-map' component={ShowMap} />
          <Route path='/upload-pic' component={UploadPic} />
          <Route path='/take-pic' component={TakePic} />
        </div>
      </Router>
    );
  }
}

export default App;