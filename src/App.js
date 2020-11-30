import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import TodayPage from './pages/TodayPage/TodayPage';
import TomorrowPage from './pages/TomorrowPage/TomorrowPage';
import TenDaysPage from './pages/TenDaysPage/TenDaysPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={TodayPage} />
          <Route exact path="/tomorrow" component={TomorrowPage} />
          <Route exact path="/tendays" component={TenDaysPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
