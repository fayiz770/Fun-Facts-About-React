import React from 'react';

export default function Header() {
    return(
        <header className='header'>
            <div className='header--class'>
                <img className='header--image' src='./logo192.png' alt='react logo'/>
                <h1 className='header--title'>ReactFacts</h1>
            </div>
            <h4 className='header--text'>React Course - Project 1</h4>
        </header>
    )
};
