import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Headeroption from './Headeroption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from "./features/userSlice"
import { auth } from './firebaseconfig';

function Header() {

    const dispatch = useDispatch();

    const logoutofApp = () => {
        dispatch(logout())
        auth.signOut();
    };
    return (
        <div className='header'>

            <div className="header_left">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" />
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder='Search..' type="text"></input>
                </div>
            </div>

            <div className="header_right">
                <Headeroption Icon={HomeIcon} title="Home" />
                <Headeroption Icon={GroupIcon} title="My Network" />
                <Headeroption Icon={WorkIcon} title="Jobs" />
                <Headeroption Icon={MessageIcon} title="Messages" />
                <Headeroption Icon={NotificationsIcon} title="Notifications" />
                <Headeroption avatar={require("./img/me.jpeg")} title="me"
                    onClick={logoutofApp} />
            </div>

        </div>
    )
}

export default Header;