import React, { useEffect, useState } from 'react';
import Navbar from '../custom_components/Navbar';
import * as Bg from '../../static/backgrounds/index';

const Main = ({children}) => {

    const [value, setValue] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => {
                return v === 4 ? 0 : v + 1;
            })
        }, 20000);
        return () => clearInterval(interval);
    }, [])

    const images = [
        Bg.Road,
        Bg.Seastars,
        Bg.Mountain,
        Bg.Stars,
        Bg.Sunset
    ]

    const mainBg = {
        backgroundImage: `url(${images[value]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: 'hidden',
    }

    return(
        <div className="main-bg" style={{...mainBg}}>
            <Navbar />
            {children}
        </div>
    )
}

export default Main;