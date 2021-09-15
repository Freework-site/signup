import React from 'react';
import './button.css'

const Button = ({children, ...otherProps}) => {
    return (
        <div className="button" {...otherProps}>
            {children}
        </div>
    )
}

export default Button
