import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Header(props) {
    return(
        <header className={`header ${props.option ? '' : 'header--light'}`}>
            <div className='header--class'>
                <img className='header--image' src='./logo192.png' alt='react logo'/>
                <h1 className='header--title'>ReactFacts</h1>
            </div>
            <div className='header--text'>
                <span className={`settings ${props.option ? 'light--dark' : 'light--light'}`}>Light</span>
                {
                    props.option ?
                    <FontAwesomeIcon 
                        className='settings fa-2xl' 
                        onClick={props.switches} 
                        icon={faToggleOn}
                    />
                    :
                    <FontAwesomeIcon 
                        className='settings fa-2xl' 
                        onClick={props.switches} 
                        icon={faToggleOff}
                        style={{color: '#333'}}
                    />
                }
                <span className={`settings ${props.option ? 'dark--dark' : 'dark--light'}`}>Dark</span>
            </div>
        </header>
    )
};
