import React from 'react';

function PostForm() {

    return (
        <div className="PostForm">
            <form action="">
                <p>Title</p>
                <input type="text" name="title" id="title" />
                <p>Thought</p>
                <textarea id="thought" name="thought"></textarea>
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}

export default PostForm;