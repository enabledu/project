import React from 'react'
import './createPost.css'
import {FaBold , FaItalic , FaUnderline,FaStrikethrough,FaCode,FaListOl,FaListUl,FaImage,FaLink} from 'react-icons/fa';

const CreatePost =() => {
    return(
        <div className='post'>
            <div className='create'>
                <h5> Create Post</h5>
                <input className='title' type={Text} placeholder={'Title (Required)'}></input>
                
                
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
                            <textarea className='ques' type={Text} placeholder={'Text (Optional)'}></textarea>
                        </div>
                        
                        <button className='publish'>Publish</button>
                     </div>
                
            </div>
        </div>
    )
}

export default CreatePost;