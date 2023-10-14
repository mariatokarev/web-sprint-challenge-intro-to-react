import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Character from './Character'




 function App() {
  const [peopleData, setPeopleData] = useState([]);
  const [ planetsData, setPlanetsData] = useState([]);
  


  useEffect(() => {
    async function fetchData() {
      try {
        const characterResponse = await axios.get('http://localhost:9009/api/people');
        const planetResponse = await axios.get('http://localhost:9009/api/planets');
        setPeopleData(characterResponse.data);
        setPlanetsData(planetResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

 
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {peopleData.map((character) => (
        <Character
          key={character.id}
          character={character}
          planet={planetsData.find((planet) => planet.id === character.homeworld)}
          // isCharacterSelected={selectedCharacters.includes(character)}
        />
      ))}
    </div>
  );
}
  
export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
