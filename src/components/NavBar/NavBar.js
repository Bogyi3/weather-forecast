import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentWeather, fetchCurrentFail } from '../../actions/currentAction';
import './NavBar.css';

//`http://api.openweathermap.org/data/2.5/forecast?q=${input.city},${input.country}&appid=${API_KEY}`


function NavBar() {

  const [input, setInput] = useState({
    city: '',
    country: '',
  })

  const dispatch = useDispatch();

  function getCurrent() {
    if (input.city) {
      dispatch (getCurrentWeather(input));
    } else {
      dispatch(fetchCurrentFail({ error: 'Please enter a city.' }))
    }
  }

  function hitEnter() {
    if (input.city) {
      dispatch (getCurrentWeather(input));
    } else {
      dispatch(fetchCurrentFail({ error: 'Please enter a city.' }))
    }
  }

  return (
    <div className='navBar'>
      <div className='searchContainer'>
        <input className='city' onChange={e => setInput({...input, city: e.target.value})} onKeyPress={hitEnter} type="text" name='city' placeholder='City'/>
        <input className='country' onChange={e => setInput({...input, country: e.target.value})} onKeyPress={hitEnter} type="text" name='country' placeholder='Country'/>
      </div>
      <div className='buttonContainer'>
        <Link className='navBarLink' to="/" style={{ textDecoration: 'none' }}>
          <button onClick={getCurrent}>Today</button>
        </Link>
        <Link className='navBarLink' to="/tomorrow" style={{ textDecoration: 'none' }}>
          <button>Tomorrow</button>
        </Link>
        <Link className='navBarLink' to="/tendays" style={{ textDecoration: 'none' }}>
          <button>Ten Days</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
