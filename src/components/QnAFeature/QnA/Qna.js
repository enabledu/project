import Container from 'react-bootstrap/Container';
import CreatePost from '../CreatePost/CreatePost';
import Recents from '../Recents/Recents';


const QnA = () =>{

    return(
        <Container >
          <CreatePost/>
          <Recents/>   
        </Container>
    )
}

export default QnA;