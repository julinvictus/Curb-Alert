import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//import Claimed from './components/Claimed';
import ShowPics from './components/ShowPics';
import ShowPicById from './components/ShowPicById';
import MapContainer from './components/ShowMap';
//import TakePic from './components/TakePic';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path='/' component={} /> */}
          {/* <Route path='/show-map' component={ShowMap} /> */}
          <Route path='/show-pics' component={ShowPics} />
          <Route path='/show-pic-by-id/:id' component={ShowPicById} />
          <Route path='/show-map' component={MapContainer} />
          
        </div>
      </Router>
    );
  }
}

export default App;