import './App.css';
import Feature from './components/features/features';
import CreatePost from './components/post/createPost';
import Recent from './components/recents/recents';



function App() {
  return (
    <div className="App">

      <div className="main">
        <Feature/>
        
        <div className='postContainer'>
          <CreatePost/>
          <Recent/>
        </div>

      </div>
    </div>
  );
}

export default App;
