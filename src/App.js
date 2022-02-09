import DisplayPost from './Components/DisplayPost/DisplayPost.jsx';
import CreatePost from './Components/CreatePost/CreatPost'

function App() {

  const [userPost, setUserPost] = usestate([{name: 'Andy Rodriguez', post: 'I ate a chicken today.'}, {name: 'Josh Roggers', post: 'I love football!'}])

  function addPost(post) {
    let 
  }

  return (
    // where code will be displayed by html 
    <div className="App">
      <header className="App-header">
        <CreatePost addNewPostProperty={}/>
        <DisplayPost />
      </header>
    </div>
  );
}

export default App;
