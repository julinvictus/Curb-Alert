import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

import ShowPics from './components/ShowPics';
import ShowPicById from './components/ShowPicById';
import ShowMap from './components/ShowMap';
import UploadPic from './components/UploadPic';
import TakePic from './components/TakePic';
import ItemLocation from './components/ItemLocation';
//import Claimed from './components/Claimed';


class App extends Component {
  render() {
    return (
      <Router>
          
        
          {/* <Route exact path='/' component={} /> */}
          <Route path='/show-pics' component={ShowPics} />
          <Route path='/show-pic-by-id/:id' component={ShowPicById} />
          <Route path='/show-map' component={ShowMap} />
          <Route path='/upload-pic' component={UploadPic} />
          <Route path='/take-pic' component={TakePic} />
          <Route path='/item-loc' component={ItemLocation} />
        
      </Router>
    );
  }
}

export default App;