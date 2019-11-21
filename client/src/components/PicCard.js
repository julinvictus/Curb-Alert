import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const moment = require('moment');

const PicCard = (props) => {
    const  post  = props.post;

    return(
        <Link to={`/show-pic-by-id/${post._id}`}>
            {/* <div className="ui link cards">     
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
            </div> */}

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title"><b>{post.title}</b></h5>
                </div>
                <div className="card-body bg" style={{ backgroundImage: 'url(' + post.image_url + ')', backgroundSize: 'cover', height: '150px', backgroundPosition: '50% 50%' }}>
                    {/* <img src={`${post.image_url}`} class="card-img" width="100%" alt="free item" /> */}
                </div>   
                <div class="card-footer text-muted">
                    Posted on {moment(post.date_posted).format('L')}
                </div>
            </div>
        </Link> 
    )
};

export default PicCard;