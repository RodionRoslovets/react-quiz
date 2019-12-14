import React from 'react';
import './MenuToggle.css';

const MenuToggle = props =>{
    const classes = ['MenuToggle', 'fa', props.isOpen ? 'fa-times open' : 'fa-bars'];

    return(
        <i 
            className={classes.join(' ')}
            onClick={props.onToggle}
        >
        </i>
    )
}

export default MenuToggle