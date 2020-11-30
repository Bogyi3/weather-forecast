import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import './TodayPage.css';



function TodayPage() {
  const currentData = useSelector((state) => state.current.current);
  const [time, setTime] = useState({currentTime: new Date().toLocaleString()});
  let iconUrl =  `http://openweathermap.org/img/wn/${currentData.icon}@2x.png`

  const tick = () => {
    setTime({currentTime: new Date().toLocaleString()});
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])


  return (
    <div className='todayPage page'>
      <p className='dateTime'>{time.currentTime}</p>
      <h1>Current Weather</h1>
      {currentData.city 
      && (<div className='dataContainer'>
        <h1>{currentData.city}, {currentData.country}</h1>
        <div className='temperature'>
          <div>{Math.round(currentData.temperature)}°C</div>
          <p>Feels like: {Math.round(currentData.feelsLike)}°C</p>
        </div>
        <div className='descriptionContainer'>
          <img src={iconUrl} alt={currentData.keyWord}/>
          <p>{currentData.description}</p>
        </div>
        <div className='windContainer'>
          <p>Wind</p>
          <p>{currentData.wind} km/h</p>
        </div>
        <div className='windContainer'>
          <p>Humidity</p>
          <p>{currentData.humidity}%</p>
        </div>
      </div>)}

    </div>
  )
}

export default TodayPage;
