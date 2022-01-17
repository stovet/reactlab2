import React, { useState } from 'react';
import PostInList from './PostInList';
import PostForm from './PostForm';
import Post from '../models/Post';
import './SocialPosts.css';



function SocialPosts(){
    //state for form open ornot
    const [isOpen, setIsOpen] = useState(false);

    const [posts, setPosts] = useState<Post[]>([
        // {title: "hi", thought: "blah blah"},
        // {title: "hi", thought: "blah blah blah"},
        // {title: "hi", thought: "blah blah blah blah"}
    ]);

    function handleFormSubmit(post: Post): void{
        setPosts(prev => [...posts, post]);
    }
    function onClose():void{
        setIsOpen(false);
    }
    function handleFormOpen(){
        //<PostForm onSubmit={handleFormSubmit} onClose={() => handleFormClose} open={isOpen}/>
    }
   
    function handleDeleteList(index: number) {
        setPosts(prev => [...prev.slice(0, index), ...prev.slice(index+1)]);
    }

    
    return (
        <div className="SocialPosts">
            <h1 className="myThoughts">My Thoughts</h1>
            <button onClick={() => setIsOpen(true)}>New Thought</button>
            {/* <button onClick={() => handleFormOpen}>New Thought</button> */}
            {/* <button onClick={<PostForm onSubmit={posts} onClose={setOpenForm(true)}/>>}>New Thought</button> */}
            {posts.map((post, i) => 
                <PostInList key={i} post={post} onDelete={() => handleDeleteList(i)}/>
            )}

            <PostForm 
            onSubmit={handleFormSubmit} 
            onClose={onClose} 
            open={isOpen}/>
        </div>
    )
}

export default SocialPosts;