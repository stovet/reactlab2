import React, { useState } from 'react';
import Post from '../models/Post';
import './PostInList.css';

interface Props {
    post: Post;
    onDelete: () => void;
}

function PostInList({post, onDelete}: Props){
    //const [title, setTitle] = useState("");
    

    return (
        // <div className="postContainer">
        <div className='PostInList'>
            <i className="material-icons" onClick={onDelete}>delete</i>
            <h2>{post.title}</h2>
            <p>{post.thought}</p>
        </div>
        // </div>
    )
}

export default PostInList;