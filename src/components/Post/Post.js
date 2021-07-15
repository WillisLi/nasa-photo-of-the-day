import React from 'react';
import Description from '../Description/Description.js';
import styled from 'styled-components';

const PostBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgWrapper = styled.img`
    border-radius: 5px;
    border: 1px solid gray;
    padding: 10px;
    width: 28vw;
    margin: 0;
`;

const APODName = styled.p`
    font-size: 1.6rem;
`;

const Date = styled.p`
    color: black;
    margin-top: 0;
`;

const Post = props => {
    const { post } = props;
    return (
        <div className = "postBorder">
            <APODName>
                {post.title}
            </APODName>
            <div className = "postMedia">
                <ImgWrapper
                    alt = "APOD"
                    src = {post.url}
                />
            </div>
            <Date>{post.date}</Date>
            <Description description = {post}/>
        </div>
    );
}

export default Post;