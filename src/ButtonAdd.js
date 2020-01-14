import React from 'react';

const ButtonAdd = (props) => {
    return (
        <div>
            <button onClick={props.buttonFunction}>
                +
            </button>
        </div>
    )
}

export default ButtonAdd