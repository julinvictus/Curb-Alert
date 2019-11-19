import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import ShowPics from './ShowPics';
//import ShowPicById from './ShowPicById';
import ShowMap from './ShowMap';
//import TakePic from './TakePic';
//import SavePost from './SavePost';

class HomePage extends Component {
    render() {
        return (
            // <!-- Page Content -->
            <div class="container">   
                <div class="row">
                    {/* Photos Column */}
                    <div class="col-xs-12 col-md-8">
                        <ShowPics />
                    </div>

                    {/* Map Column */}
                    <div class="col-xs-12 col-md-4">
                        <ShowMap />
                    </div>
                </div>
            </div>       
        );
    }
} 
export default HomePage;