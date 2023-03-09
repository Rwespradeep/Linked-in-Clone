import React from 'react';
import './Headerops.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Headeroption({ avatar, Icon, title, onClick }) {
    return (
        <div onClick={onClick} className='header_option'>
            {Icon && <Icon className="headerOption_icon" />}
            {avatar &&
                <AccountCircleIcon className="headerOption_icon" src={avatar} />
            }
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default Headeroption