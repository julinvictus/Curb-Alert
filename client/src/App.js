import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import ShowPics from './components/ShowPics';
import ShowPicById from './components/ShowPicById';
import ShowMap from './components/ShowMap';
import UploadPic from './components/UploadPic';
import TakePic from './components/TakePic';
import ItemLocation from './components/ItemLocation';
import SavePost from './components/SavePost';
import HomePage from './components/HomePage';
//import Claimed from './components/Claimed';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">CURB-ALERT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/take-pic"><i class="camera icon"></i></Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link>  */}
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form> */}
            </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <br />
          <Route exact path='/' component={HomePage} />
          <Route path='/show-pics' component={ShowPics} />
          <Route path='/show-pic-by-id/:id' component={ShowPicById} />
          <Route path='/show-map' component={ShowMap} />
          <Route path='/upload-pic' component={UploadPic} />
          <Route path='/take-pic' component={TakePic} />
          <Route path='/item-loc' component={ItemLocation} />
          <Route path='/save-post' component={SavePost} />
        </div>
        
      </Router>
    );
  }
}

export default App;