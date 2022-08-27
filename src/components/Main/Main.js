import React from 'react';
import Navbar from '../custom_components/Navbar';

const Main = ({children}) => {

    return(
        <div className="main-bg">
            <Navbar />
            {children}
        </div>
    )
}

export default Main;