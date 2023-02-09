import './App.css';
import Container from 'react-bootstrap/Container';
import CreatePost from './components/CreatePost/createPost';

function App() {
  return (
    <>
      <Container className='appContainer'>
        <Container fluid>
          <CreatePost/>
        </Container>
      </Container>
    </>
  );

}

export default App;


