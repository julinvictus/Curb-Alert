import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//import Claimed from './components/Claimed';
//import ShowMap from './components/ShowMap';
import ShowPics from './components/ShowPics';
//import TakePic from './components/TakePic';
//import UploadPic from './components/UploadPic';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path='/' component={} /> */}
          {/* <Route path='/show-map' component={ShowMap} /> */}
          <Route path='/show-pics' component={ShowPics} />
          
        </div>
      </Router>
    );
  }
}

export default App;