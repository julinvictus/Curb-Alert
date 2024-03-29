import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from "./components/Profile";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
//import Button from 'react-bootstrap/Button';

import ShowPics from './components/ShowPics';
import ShowPicById from './components/ShowPicById';
import ShowMap from './components/ShowMap';
import TakePic from './components/TakePic';
import SavePost from './components/SavePost';
import HomePage from './components/HomePage';
import Auth0Button from './components/Auth0Button';
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {  
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand href="/" style={{fontFamily: 'Barlow Condensed', fontSize: 25}}><img src='/Logo.png' style={{width: '32px', height: 'auto'}} alt="logo"/><b> CURB-ALERT</b></Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="justify-content-end">
                {/* <Nav.Link href="/take-pic"><i class="camera icon"></i></Nav.Link> */}
                <Auth0Button />
                {/* <Nav.Link href="#link">Link</Nav.Link>  */}
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form> */}
            {/* </Navbar.Collapse> */}
          </div>
        </Navbar>
        <div className="container">
          <br />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <PrivateRoute path='/show-pics' component={ShowPics} />
            <Route path='/show-pic-by-id/:id' component={ShowPicById} />
            <Route path='/show-map' component={ShowMap} />
            <Route path='/take-pic' component={TakePic} />
            <Route path='/save-post' component={SavePost} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </div>       
      </Router>
    );
  }
}

export default App;