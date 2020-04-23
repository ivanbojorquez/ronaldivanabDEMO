import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';
import {CSSTransition} from 'react-transition-group';

const SideDrawer = (props) => {

    const content = (
        <CSSTransition
            in={props.show}
            timeout = {200}
            classNames= "side-in-left"
            unmountOnExit>

            <aside className="side-drawer" onClick={props.onClick}>
                {props.children}
            </aside>
        </CSSTransition>

    ); 

    return ReactDOM.createPortal(content,document.getElementById('drawer-hook'));
    
}
export default SideDrawer;