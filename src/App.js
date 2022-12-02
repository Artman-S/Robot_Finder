import React from 'react';
/** Import de la donnée */
import Robots from './data/data';
import RobotCard from './Components/RobotCard';
import { useState } from 'react';

import './App.css';


function App() {
  console.log(Robots[0])
  //je créer un state pour mon input de recherche avec des quotes vides
  const [searchInput, setSearchInput] = useState('')
  const searchItems = (searchValue)=> { setSearchInput(searchValue)}
  /*je map sur mon component <Robot /> pour afficher tout mon tableau */
  return (
    <div className="App">
      {console.log(searchInput)}
      <div className='title'>
      <h1>Robot Finder</h1>
      <input 
      type="text" 
      placeholder='search'
      onChange={(e) => searchItems(e.target.value)}
      />
      </div> 
      {Robots.map((Robot) =>( 
      <RobotCard {...Robot}/>
      ))}
    </div>
  );
}

export default App;
