import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ imp, text, link}) {
    return (
        <div className={`button ${imp == 'secondary' ? 'button__white' : ''}`}>
            <Link className="link" to={`${link}`}>
                {text}
            </Link>
        </div>
    )
}

export default Button
