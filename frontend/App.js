import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

 function App() {
  const [peopleData, setPeopleData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  const [showHomeworld, setShowHomeworld] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const characterResponse = await axios.get(urlPeople);
        const planetResponse = await axios.get(urlPlanets);
        setPeopleData(characterResponse.data);
        setPlanetsData(planetResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const openHomeworld = (urlPlanets) => {
    setShowHomeworld(urlPlanets);
  };

  const closeHomeworld = () => {
    setShowHomeworld(null);
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {peopleData.map((person, index) => (
        <div key={index} className="character-card">
          <h3 className="character-name">{person.name}</h3>
          <button onClick={() => openHomeworld(person.homeworld)}>
            {person.name}'s Homeworld
          </button>
          {showHomeworld === person.homeworld && (
            <div className="character-planet">
            
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
