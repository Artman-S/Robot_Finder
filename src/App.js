import React from 'react';
/** Import de la donnée */
import Robots from './data/data';
import RobotCard from './Components/RobotCard';
import RobotAdress from './Components/RobotAdress';

import './App.css';


function App() {
  console.log(Robots[0])
  
  /*je map sur mon component <Robot /> pour afficher tout mon tableau */
  return (
    <div className="App">
      <div className='title'>
      <h1>Robot Finder</h1>
      <input type="text" placeholder='search' />
      </div> 
      {Robots.map((Robot) =>( 
      <RobotCard {...Robot}/>
      ))}
    </div>
  );
}

export default App;
