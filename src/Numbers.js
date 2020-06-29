import React from 'react';

function Numbers(props) {
    return(
        <button 
            value={props.value}
        onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Numbers;