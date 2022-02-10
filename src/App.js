import NavBar from './Components/NavBar/NavBar.jsx';
import DisplayPost from './Components/DisplayPost/DisplayPost.jsx';
import CreatePost from './Components/CreatePost/CreatePost'
import { useState } from 'react';

function App() {

  const [userPost, setUserPost] = useState([{name: 'Andy Rodriguez', post: 'I ate a chicken today.'}, {name: 'Josh Madden', post: 'I like to move it move it!!!'}])

  function addNewPost(post) {
    let tempPost = [...userPost, post];
    setUserPost(tempPost);
  }

  return (
    // where code will be displayed by html 
    <div className="App">
      <header className="App-header">
        <h1>Story Betold!</h1>
        <NavBar />
        <CreatePost  addNewPostProperty={addNewPost} />
        <DisplayPost parentPost={userPost}/>
      </header>
    </div>
  );
}

export default App;
