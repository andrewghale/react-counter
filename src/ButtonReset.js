import React from 'react';

const ButtonReset = (props) => {
    return (
        <div>
            <button className={props.count <= 0 ? 'red-bg' : 'white-bg'} onClick={props.buttonFunction}>
                Reset
            </button>
        </div>
    )
}

export default ButtonReset