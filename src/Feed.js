import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css';
import PhotoIcon from '@mui/icons-material/Photo';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebaseconfig';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    const id = db.collection("posts").doc().id;

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )

            ))
        })

    }, [])

    const sendPost = (event) => {
        event.preventDefault();
        db.collection("posts").add({
            post_id: id,
            name: user.displayName,
            description: "Testing firebase",
            message: input,
            photoUrl: user.photoUrl || " ",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),


        })


        setInput("");
    }

    const deletePost = (id) => {
        const docid = db.collection("posts").where('post_id', "==", id);
        docid.get().then(function (querySnapshot) {
            querySnapshot.forEach((doc) => {
                doc.ref.delete();
            })
        })
        alert("document deleted!");
    }



    return (
        <div className='feed'>
            {/* feed top section photo event video article */}
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={PhotoIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SmartDisplayIcon} title="Video" color="#5F9B41" />
                    <InputOption Icon={CalendarMonthIcon} title="Event" color="#E0BD8A" />
                    <InputOption Icon={ArticleIcon} title="Write article" color="#E16745" />
                </div>
            </div>

            {/* posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl, post_id } }) => (
                    <Post
                        key={id}
                        pid={post_id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                        onDelete={deletePost}
                    />
                ))}
            </FlipMove>


        </div>
    )
}

export default Feed