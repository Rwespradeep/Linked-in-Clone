import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src={require('./img/sidebar-avatar-backgroud.jpg')} />
                <Avatar src={user.photoUrl} className='sibebar_avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">
                        2000
                    </p>
                </div>
                <div className="sidebar_stat">
                    <p>views on post </p>
                    <p className="sidebar_statNumber">
                        1000
                    </p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('deep Learning')}
                {recentItem('angular')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>

        </div>
    )
}

export default Sidebar