import React from 'react';
import './input.sass';

const Input = (props) => {
    return (
        <input 
            value={props.value} 
            onChange={(event) => props.setValue(event.target.value)} 
            className="input-main" type={props.type} 
            placeholder={props.placeholder}
        />
    );
};

export default Input;