import React from 'react';

const Navbar = props => {

    return (
        <nav className="navbar-fixed-top">
            <div>
                <h1> To do application</h1>
            </div>
            <div>
                <a href="dashboard" className="navbar-link">
                    Dashboard
                </a>
            </div>
        </nav>
    )
}

export default Navbar;