import {React,useState} from 'react'
import './CreatePost.css'
import Modal from 'react-bootstrap/Modal';
// import {FaBold , FaItalic , FaUnderline,FaStrikethrough,FaCode,FaListOl,FaListUl,FaImage,FaLink} from 'react-icons/fa';


const CreatePost =() => {

    const [title, setTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    
    const inputIsEmpty = () => title === "" ;
     
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)
    console.log({title: title, body: postBody})};

    return(
        <div >
            
            <input className='createOption'
                        type='text'
                        placeholder={'Create post'}  
                        onClick={()=>setShow(true)}
                />

            
            <Modal
                    size="lg"
                    dialogClassName="modal-90w"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered    
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}    
                >
                    <Modal.Header closeButton>
                        <Modal.Title >Create Post</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                         <div className='createPostContainer' > 
                            <input className='title' 
                                    type='text' 
                                    placeholder={'Title (Required)'} 
                                    onChange={(event) => {
                                        setTitle(event.target.value.trim());
                                        }}
                            />

                            <div>
                                <div className='txtArea'>
                                    {/* <div className='txtIcons'>
                                        <ListGroup horizontal={"lg"}>
                                            <ListGroup.Item> <FaBold/></ListGroup.Item>
                                            <ListGroup.Item> <FaItalic/></ListGroup.Item>
                                            <ListGroup.Item> <FaUnderline/></ListGroup.Item>
                                            <ListGroup.Item><FaStrikethrough/></ListGroup.Item>
                                            <ListGroup.Item><FaCode/></ListGroup.Item>
                                            <ListGroup.Item><FaListOl/></ListGroup.Item>
                                            <ListGroup.Item><FaListUl/></ListGroup.Item>
                                            <ListGroup.Item><FaImage/></ListGroup.Item>
                                            <ListGroup.Item><FaLink/></ListGroup.Item>
                                        </ListGroup>
                                    </div> */}

                                    <textarea className='postBody' 
                                        placeholder={'Text (Optional)'} 
                                        onChange={(event) => {
                                            setPostBody(event.target.value.trim());
                                            }}
                                        />
                                </div>
                                <button type='submit' 
                                        className={inputIsEmpty() ? 'publishDisabled' : 'publishEnabled' } 
                                        disabled={inputIsEmpty()}
                                        onClick={()=>{
                                            handleClose();
                                            }}> 
                                            Submit Post 
                                </button>
                            </div>
                        </div> 
                    </Modal.Body>                  
            </Modal>
        </div>
    )
}

export default CreatePost;