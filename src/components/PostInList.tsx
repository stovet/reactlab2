import React from 'react';
import Post from '../models/Post';

interface Props {
    //callback prop onDelete
}

function PostInList(post: Post){
    
    return (
        <div className='PostInList'>
            <h2>{post.title}</h2>
            <p>{post.thought}</p>
        </div>
    )
}

export default PostInList;