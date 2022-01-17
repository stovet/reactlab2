import React, { FormEvent, useState } from 'react';
import Post from '../models/Post';
import Modal from 'react-modal';

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
    }
    // function openModal(open: boolean){
    //     setIsOpen(open);
    // }
    // function closeModal(){
    //     setIsOpen(false);
    // }

    return (

        <div className="PostForm" onSubmit={handleFormSubmit}>

               <Modal
                isOpen={openForm}
                onRequestClose={onClose} // closeModal
               >
            <form>
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

