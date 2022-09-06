import React from 'react';

const Navbar = props => {

    return (
        <nav className="navbar-fixed-top">
            <div>
                <h1> 
                    <a href="/" className="navbar-header-link">
                        To do application
                    </a>
                </h1>
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