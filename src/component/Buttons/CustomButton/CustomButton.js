import React from 'react';
import './customButton.scss';

const CustomButton = ({children, ...otherProps})=>{
    return (
        <div>
            <button className="custom-button" {...otherProps}>{children}</button> 
        </div>
    )
}

export default CustomButton;