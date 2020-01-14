import React from 'react';

const ButtonReset = (props) => {
    return (
        <div>
            <button onClick={props.buttonFunction}>
                Reset
            </button>
        </div>
    )
}

export default ButtonReset