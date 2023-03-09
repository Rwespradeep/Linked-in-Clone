import React, { useEffect } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebaseconfig';
import Widgets from './Widgets';




{/* Project structure which we are following:
      Header
      App body
      side bar
      feed 
      widgets */}


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }
      else {
        //user logged out
        dispatch(logout());
      }
    })

  }, [])



  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>

      )}
    </div>
  );
}

export default App;
