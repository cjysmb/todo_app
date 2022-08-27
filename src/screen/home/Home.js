import React from 'react';
import CurrentDate from '../../components/custom_components/CurrentDate';
import Quote from '../../components/custom_components/Quote';

const Home = props => {

    return(
        <div className="home-main">
            <div className="home-sub">
                <CurrentDate name={"Cjay"} />
                <Quote />
            </div>
        </div>
    )
}

export default Home;