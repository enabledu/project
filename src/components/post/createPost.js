import {React,useState} from 'react'
import './createPost.css'
import {FaBold , FaItalic , FaUnderline,FaStrikethrough,FaCode,FaListOl,FaListUl,FaImage,FaLink} from 'react-icons/fa';

const CreatePost =() => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
      }

    return(
        <div className='post'>
            <form className='create' onSubmit={handleSubmit} id='postForm'>
                <h5> Create Post</h5>
                <input className='title' 
                        type={Text} 
                        placeholder={'Title (Required)'} 
                        name='title' 
                        value={inputs.name} 
                        onChange={handleChange}>
                </input>
            
                <div className='wrapper'>
                    <div className='txtArea'>
                        <div className='txtIcons'>
                            <ul>
                                <li> <FaBold/></li>
                                <li> <FaItalic/></li>
                                <li> <FaUnderline/></li>
                                <li><FaStrikethrough/></li>
                                <li><FaCode/></li>
                                <li><FaListOl/></li>
                                <li><FaListUl/></li>
                                <li><FaImage/></li>
                                <li><FaLink/></li>
                            </ul>
                        </div>

                        <textarea className='ques' 
                                    type={Text} 
                                    placeholder={'Text (Optional)'} 
                                    name='post' 
                                    value={inputs.value} 
                                    onChange={handleChange}>
                        </textarea>
                    </div>
                    <button type='submit' 
                            className='publish' 
                            onClick={()=>document.getElementById('postForm').reset()}>
                                Publish
                    </button>
                </div>
                
            </form>
        </div>
    )
}

export default CreatePost;