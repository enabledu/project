import './Recents.css'
import React, { useState, useEffect} from "react"
import { BiUpvote, BiDownvote } from "react-icons/bi";


const Recents =()=>{

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts =
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts));
        
    },[])
  
    return(
     <div>
        <h1 id="recentsTitle"> Recents</h1>
        <div >
            {
                posts.map(post => (
                    <div className="post" key={post.id}>
                        <span id="userAvatar">user Avatar</span>
                        <div className="postDetails">
                            <span id="userID">@user id</span>
                            <h5 id="postTitle">{post.title}</h5>
                            <p id="postBody">{post.body}</p>
                            <span><BiUpvote/></span>
                            <span><BiDownvote/></span>
                        </div>
                        
                    </div>
                ))
            }
        </div>
        
     </div>
    )

}

export default Recents;