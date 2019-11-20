import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ShowPics from './ShowPics';
import ShowMap from './ShowMap';

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