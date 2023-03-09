import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import InputOption from './InputOption';
import './post.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
                <InputOption Icon={MessageOutlinedIcon} title="Comment" />
                <InputOption Icon={AutorenewIcon} title="Repost" />
                <InputOption Icon={SendOutlinedIcon} title="Send" />

            </div>

        </div>
    )
})

export default Post