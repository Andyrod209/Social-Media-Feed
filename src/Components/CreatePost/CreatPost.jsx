import { useState } from "react";

const CreatePost = (props) => {
    
    const [name, setName] = useState('Andy')
    const [ post, setpost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost)
        props.addNewPostProperty(newPost)
    }

    return (
        <form>
            <div>
                <input type='text' placeholder="Name" onChange={}/>
                <input type='text' placeholder="Type anything :)"/>
                <button onSubmit={handleSubmit}>Send out!</button>
            </div>
        </form>
    )
}

export default CreatePost;