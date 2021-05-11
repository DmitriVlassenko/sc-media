import "./Feed.css"
import StoryLine from "./StoryLine";
import MessageBox from "./MessageBox";
import Post from "./Post";
import db from "../firebase";
import {useEffect, useState} from "react";

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setPosts(snapshot
                .docs.map(doc => ({ id: doc.id, data: doc.data() } ))))
    }, [])

    return (
        <div className={"feed"}>
            <StoryLine />
            <MessageBox />
            {posts.map(post => {
                return(
                    <Post key={post.data.timestamp} profilePic={post.data.profilePic} message={post.data.message} timestamp={post.data.timestamp}
                          username={post.data.username} image={post.data.image} />
                )
            })}
        </div>
    )
}

export default Feed