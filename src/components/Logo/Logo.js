import React from 'react'
import classes from './Logo.module.css'
import Logo from '../../assets/images/logo.png'

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={Logo} alt="LOGO" />
        </div>
    );
}

export default logo;