import React, { useState } from 'react';
import PostInList from './PostInList';
import PostForm from './PostForm';
import Post from '../models/Post';





function SocialPosts(){

    const [posts, setPosts] = useState<Post[]>([
        {title: "hi", thought: "blah blah"},
        {title: "hi", thought: "blah blah blah"},
        {title: "hi", thought: "blah blah blah blah"}
    ]);

    function handleFormSubmit(post: Post): void{

    }
    return (
        <div className="SocialPosts">
            <h1>My Thoughts</h1>
            <button type='submit' >New Thought</button>
            {posts.map((post, i) => 
                <PostInList key={i} title={post.title} thought={post.thought}/>
            )}
            

            {/* <PostForm onSubmit={handleFormSubmit} /> */}
        </div>
    )
}

export default SocialPosts;