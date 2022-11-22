import React from 'react';
/** Import de la donnée */
import Robots from './data/data';
import RobotCard from './Components/RobotCard';

import './App.css';


function App() {
  console.log(Robots)
  return (
    <div className="App">
      <div className='title'>
      <h1>Robot Finder</h1>
      </div>
      {Robots.map((Robot) =>( 
      <RobotCard {...Robot}/>
      ))}
    </div>
  );
}

export default App;
