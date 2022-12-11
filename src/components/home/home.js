import React,{useState} from "react";
import Recent from "../recents/recents";
import Modal from "../modal/modal";
import CreatePost from "../post/createPost";
import './home.css'

const Home =()=>{

    const[isModalOpened,setIsModalOpened]=useState(false)

    return (
        <div className="homeContainer">

            <div className="options">
                <div className="avatar">avatar</div>

                <input type={Text} placeholder={'Create post'} className='createOption' onClick={()=> setIsModalOpened(true)}></input>

                <Modal isOpened={isModalOpened} onClose={()=>setIsModalOpened(false)}><CreatePost onSubmit={()=> setIsModalOpened(false)}></CreatePost></Modal>
            </div>

            <div className="recentsContainer">
                <h5>Recents</h5>
                <Recent/>
        
            </div>

            
        </div>
    )
}

export default Home;