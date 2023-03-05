import './App.css';
import Container from 'react-bootstrap/Container';
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home'
import QnA from './components/QnAFeature/QnA/Qna';
import SideBar from './components/SideBar/SideBar';
import {Routes, Route} from 'react-router-dom';






function App() {

  return (
    <>
      <Container className='appContainer' fluid>
        <SideBar/>
        <Routes>
          <Route path='*' element={<NoMatch/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/feature/0' element={<QnA/>}/>
        </Routes>
      </Container>


    </>
  );

}

export default App;


