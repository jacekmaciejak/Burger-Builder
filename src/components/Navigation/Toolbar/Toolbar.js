import * as React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'



const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className="">MENU</div>
            <Logo />
            <nav>
                ...
</nav>
        </header>
    );
}

export default toolbar;