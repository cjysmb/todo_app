import React, { useState, useEffect} from 'react';

const CurrentDate = ({name}) => {
  const locale = 'en-US';
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    setInterval(() => setDate(new Date()), 3000)
  }, [])


  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, ${name}.`;

  const time = today.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  return (
      <div className="date-div">
        <div className="time">
          {time}
        </div>
        <div className="wish">
          {wish}
        </div>
        <div className="wish date">
          {date}
        </div>
      </div>
  )
};

export default CurrentDate;