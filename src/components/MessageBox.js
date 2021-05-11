import "./MessageBox.css"
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import {useState} from "react";
import {useStateValue} from "../StateProvider";
import db from "../firebase";
import firebase from "firebase/app";

const MessageBox = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [{user}] = useStateValue()

    const handleSubmit = (event) => {
        event.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('')
        setImageUrl('')
    }

    return (
        <div className={"messageBox"}>
            <div className="messageBox__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input}
                           onChange={event => setInput(event.target.value)}
                           className={"messageBox__input"} placeholder={"What matters for you ?"}
                           type="text"/>
                    <input value={imageUrl}
                           onChange={event => setImageUrl(event.target.value)}
                           placeholder={"image URL (Optional)"}
                           type="text"/>
                    <button onClick={handleSubmit} type={"submit"}>Hidden</button>
                </form>
            </div>

            <div className="messageBox__bottom">
                <div className="messageBox__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageBox__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageBox__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageBox