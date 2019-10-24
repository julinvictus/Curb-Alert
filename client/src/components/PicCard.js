import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PicCard = (props) => {
    const  post  = props.post;

    return(
        <div className="card-container">
            <div className="desc">
                    {/* Use react route */}
                    <Link to={`/show-pic-by-id/${post._id}`}>
                        <h3>{post.title}</h3>
                        <img src={`${post.image_url}`} width="100%" alt="free item" />
                    </Link> 
            </div>
        </div>
    )
};

export default PicCard;