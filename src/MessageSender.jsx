import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import { useStateValue } from "./StateProvider";
import db from "./firebase.js";
import firebase from "firebase";





function MessageSender() {
    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            image: imgUrl,
            message: input,
            profilePic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.displayName
        })

        setInput("");
        setImgUrl("");
        
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} className="messengerSender__avatar"/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="What is on your mind? " type="text"/>
                    <input placeholder="Image URL (optional)" type="text" value={imgUrl} onChange={e => setImgUrl(e.target.value)}/>
    
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>
                
            </div>
            <div className="messageSender_bottom">
                <div className="messengerSender__option">
                    <VideocamIcon style={{ color: "red"}}/>
                    <h5>Live Video</h5>

                </div>
                <div className="messengerSender__option">
                    
                </div>
                <div className="messengerSender__option">
                    <PhotoLibraryIcon style={{ color: "green"}}/>
                    <h5>Photo/Video</h5>
                    
                </div>
                <div className="messengerSender__option">
                    <SentimentSatisfiedIcon style={{ color: "orange"}}/>
                    <h5>Feeling/Activity</h5>
                    
                </div>

            </div>
            
        </div>
    )
}

export default MessageSender
