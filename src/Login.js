import React, { useState } from 'react';
import { auth } from './firebaseconfig';
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import "./Login.css";

function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilepic] = useState("");
    const dispatch = useDispatch();

    const loginApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            }).catch(error => alert(error.message));

    }

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        })
                        )
                    });
            }).catch(error => alert(error.message));
    };



    return (
        <div className='login'>
            <img src={require("./img/linked-in.png")} />


            <form autoComplete="off">
                <input type="text" placeholder='Fullname' value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Profile pic URL' value={profilePic} onChange={e => setProfilepic(e.target.value)} />
                <input placeholder='Email' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder='Password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' onClick={loginApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className='login_register' onClick={register}>Register Now!</span>
            </p>
        </div>
    )
}

export default Login;