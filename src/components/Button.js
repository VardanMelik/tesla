import React from 'react';
import { Link } from 'react-router-dom';

function Button({ imp, text, link}) {
    return (
        <div className={`button ${imp == 'secondary' ? 'button__white' : ''}`}>
            <Link to={`$link`}>
                {text}
            </Link>
        </div>
    )
}

export default Button
