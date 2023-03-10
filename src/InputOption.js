import React from 'react';
import './InputOption.css';

function InputOption({ Icon, title, color, onDeleteClick }) {
    return (
        //{
        // title: "Delete" ? < div className='inputOptions' >
        //     <Icon onClick={onDeleteClick} style={{ color: color }} />
        //     <h4>{title}</h4>
        // </div > : < div className='inputOptions' >
        //     <Icon style={{ color: color }} />
        //     <h4>{title}</h4>
        // </div >
        //}
        // < div className='inputOptions' >
        //     <Icon style={{ color: color }} />
        //     <h4>{title}</h4>
        // </div >
        <div>
            {{ title } = "Delete" ? <div className="inputOptions">
                <Icon onClick={onDeleteClick} style={{ color: color }} />
                <h4>{title}</h4>
            </div>
                :
                <div className="inputOptions">
                    <Icon style={{ color: color }} />
                    <h4>{title}</h4>
                </div>}
        </div>
    )
}

export default InputOption