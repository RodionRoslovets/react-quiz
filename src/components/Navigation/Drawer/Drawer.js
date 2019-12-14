import React from 'react';
import './Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links= [1, 2, 3];

class Drawer extends React.Component {
    renderLinks(){
        return links.map((link, index)=>{
            return (
                <li key={index}>
                    <a href="https://www.google.com">Link {link}</a>
                </li>
            )
        })
    }
    

    render(){
        const classes = ['Drawer', !this.props.isOpen ? 'close' : null];

        return(
            <React.Fragment>
                <nav className={classes.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
                
            </React.Fragment>
            
        )
    }
    
} 

export default Drawer