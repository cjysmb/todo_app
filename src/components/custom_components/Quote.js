import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Quote = () => {
    const baseURL = 'https://quotes.rest/qod?language=en'
    const [qod, setQuote] = useState({})

    const getQOD = async () => {
        try {
            const response = await axios.get(baseURL);

            setQuote(response.data.contents.quotes)
        }

        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getQOD();
    }, [])


    return (
        <div className="quote-div">
            <div className="quote-header">
                Quote of the day
            </div>
            <div className="quote">
                "{qod[0] && qod[0].quote}"
            </div>
        </div>
    )
}

export default Quote;