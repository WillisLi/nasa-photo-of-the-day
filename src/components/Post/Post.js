import React from 'react';
import Description from '../Description/Description.js';
import "./Post.css";

const Post = props => {
    const { post } = props;
    return (
        <div className = "postBorder">
            <div className = "postMedia">
                <img
                    alt = "APOD"
                    src = {post.url}
                    className = "APODMEdia"
                />
            </div>
            <Description description = {post}/>
        </div>
    );
}

export default Post;