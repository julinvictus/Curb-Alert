import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const moment = require('moment');

const PicCard = (props) => {
    const  post  = props.post;

    return(
        <Link to={`/show-pic-by-id/${post._id}`}>
        <div className="ui link cards">
            
                <div className="card">
                    <div className="content">
                        <div className="header">{post.title}</div>      
                    </div>
                    <div className="image">
                        <img src={`${post.image_url}`} width="100%" alt="free item" />
                    </div>
                    
                    <div className="extra content">
                        <span className="left floated">
                            Posted on {moment(post.date_posted).format('L')}
                        </span>
                        
                    </div>
                
                </div>   
        </div>
        </Link> 
        

        //   <div className="card-container">
        //      <div className="desc"> 
        //          Use react route 
        //              <Link to={`/show-pic-by-id/${post._id}`}>
        //                  <h3>{post.title}</h3>
        //                 <img src={`${post.image_url}`} width="100%" alt="free item" />
        //              </Link> 
        //      </div>
        //  </div>
    )
};

export default PicCard;