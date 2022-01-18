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
            
            <h2>{post.title}</h2>
            <span className="trashcan"><i className="material-icons" onClick={onDelete}>delete</i></span>
            <p className="thought">{post.thought}</p>
        </div>
        // </div>
    )
}

export default PostInList;