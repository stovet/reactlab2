import React, { FormEvent, useState } from 'react';
import Post from '../models/Post';
import Modal from 'react-modal';
import './PostForm.css';

interface Props {
    onSubmit: (post: Post) => void;
    onClose: () => void;
    open: boolean;
}

function PostForm({onSubmit, onClose, open}: Props ) {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");

    
    let openForm = false;
    if(open){
  
        openForm = true;
    }

    function handleFormSubmit(e:FormEvent){
        e.preventDefault();
        const newPost: Post = {
            title: title,
            thought: thought
        };
        onSubmit(newPost);
        onClose();
        setTitle("");
        setThought("");
    }

  
    return (

        <div className="PostForm" onSubmit={handleFormSubmit}>

               <Modal
                className="modal"
                isOpen={openForm}
                onRequestClose={onClose} // closeModal
               >
            <form className="form">
            <i className="material-icons" onClick={onClose}>close</i>
                <p>Title</p>
                <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)}/>
                <p>Thought</p>
                <textarea id="thought" name="thought" rows={5} onChange={e => setThought(e.target.value)}></textarea>
                <button type='submit' onClick={handleFormSubmit}>Add Post</button>
            </form>
            </Modal>
        </div>
    )
}

export default PostForm;

