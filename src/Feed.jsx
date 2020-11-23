import React, { useEffect, useState } from 'react';
import "./Feed.css";
import Post from './Post';
import StoryReels from './StoryReels';
import db from "./firebase.js";
import MessageSender from './MessageSender';


function Feed() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() =>
     {
         db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))

         );
     }, []);

    return (
        <div className="feed">
            <StoryReels/> 
            <MessageSender/>
            {posts.map((post) => (
              <Post 
                username={post.data.username}
                key={post.id}
                message={post.data.message}
                timestamp={post.data.timestamp}
                profilePic = {post.data.profilePic}
                image={post.data.image}
              />

            ))}

            
        </div>
    )
}

export default Feed
