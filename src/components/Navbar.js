import React from 'react';
import employeeIcon from './image/employeeIcon.jpg';
import Search from './Search';

function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
            <a className="navbar-brand" href="/">
                Employee Directory
            </a>
            <Search value={props.value} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
        </nav>
    )
}

export default Navbar;