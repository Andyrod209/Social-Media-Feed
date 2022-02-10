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
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Name" onChange={(event) => setName(event.target.value)}/>
            <input type='text' placeholder="Type anything :)" onChange={(event) => setpost(event.target.value)}/>
            <button type="submit" onSubmit={handleSubmit}>Send out!</button>
        </form>
        </div>
    )
}

export default CreatePost;        
    