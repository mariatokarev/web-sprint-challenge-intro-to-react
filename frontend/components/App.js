import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

  

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  
  const [peopleData, setPeopleData] = useState();
  const [planetsData, setPlanetsData] = useState();

  useEffect(() => {
    function fetchPeopleData() {
      axios.get(urlPeople)
        .then((response) => {
          console.log('People Data:', response.data);
          setPeopleData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching people data:', error);
        });
    }

    function fetchPlanetsData() {
      axios.get(urlPlanets)
        .then((response) => {
          console.log('Planets Data:', response.data);
          setPlanetsData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching planets data:', error);
        });
    }

   fetchPeopleData();
    setPeopleData([
        {
          "name": "State",
          "value": [
            "{birth_year: \"19BBY\", created: \"2014-12-09T13:50:51…}",
            "{birth_year: \"112BBY\", created: \"2014-12-10T15:10:5…}",
            "{birth_year: \"33BBY\", created: \"2014-12-10T15:11:50…}",
            "{birth_year: \"41.9BBY\", created: \"2014-12-10T15:18:…}",
            "{birth_year: \"19BBY\", created: \"2014-12-10T15:20:09…}",
            "{birth_year: \"52BBY\", created: \"2014-12-10T15:52:14…}",
            "{birth_year: \"47BBY\", created: \"2014-12-10T15:53:41…}",
            "{birth_year: \"unknown\", created: \"2014-12-10T15:57:…}",
            "{birth_year: \"896BBY\", created: \"2014-12-10T15:59:5…}"
          ],
          "subHooks": [],
          "hookSource": {
            "lineNumber": 216,
            "functionName": "App",
            "fileName": "http://localhost:3003/index.js",
            "columnNumber": 86
          }
        },
        {
          "name": "State",
          "value": [
            "{climate: \"arid\", created: \"2014-12-09T13:50:49.641…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:35:4…}",
            "{climate: \"temperate, tropical\", created: \"2014-12-…}",
            "{climate: \"frozen\", created: \"2014-12-10T11:39:13.9…}",
            "{climate: \"murky\", created: \"2014-12-10T11:42:22.59…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:43:5…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:50:2…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:52:3…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:54:1…}"
          ],
          "subHooks": [],
          "hookSource": {
            "lineNumber": 217,
            "functionName": "App",
            "fileName": "http://localhost:3003/index.js",
            "columnNumber": 88
          }
        },
        {
          "name": "Effect",
          "value": "ƒ () {}",
          "subHooks": [],
          "hookSource": {
            "lineNumber": 218,
            "functionName": "App",
            "fileName": "http://localhost:3003/index.js",
            "columnNumber": 51
          }
        }
      ])
   fetchPlanetsData();
    setPlanetsData([
        {
          "name": "State",
          "value": [
            "{birth_year: \"19BBY\", created: \"2014-12-09T13:50:51…}",
            "{birth_year: \"112BBY\", created: \"2014-12-10T15:10:5…}",
            "{birth_year: \"33BBY\", created: \"2014-12-10T15:11:50…}",
            "{birth_year: \"41.9BBY\", created: \"2014-12-10T15:18:…}",
            "{birth_year: \"19BBY\", created: \"2014-12-10T15:20:09…}",
            "{birth_year: \"52BBY\", created: \"2014-12-10T15:52:14…}",
            "{birth_year: \"47BBY\", created: \"2014-12-10T15:53:41…}",
            "{birth_year: \"unknown\", created: \"2014-12-10T15:57:…}",
            "{birth_year: \"896BBY\", created: \"2014-12-10T15:59:5…}"
          ],
          "subHooks": [],
          "hookSource": {
            "lineNumber": 216,
            "functionName": "App",
            "fileName": "http://localhost:3003/index.js",
            "columnNumber": 86
          }
        },
        {
          "name": "State",
          "value": [
            "{climate: \"arid\", created: \"2014-12-09T13:50:49.641…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:35:4…}",
            "{climate: \"temperate, tropical\", created: \"2014-12-…}",
            "{climate: \"frozen\", created: \"2014-12-10T11:39:13.9…}",
            "{climate: \"murky\", created: \"2014-12-10T11:42:22.59…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:43:5…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:50:2…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:52:3…}",
            "{climate: \"temperate\", created: \"2014-12-10T11:54:1…}"
          ],
          "subHooks": [],
          "hookSource": {
            "lineNumber": 217,
            "functionName": "App",
            "fileName": "http://localhost:3003/index.js",
            "columnNumber": 88
          }
        },
        {
          "name": "Effect",
          "value": "ƒ () {}",
          "subHooks": [],
          "hookSource": {
            "lineNumber": 218,
            "functionName": "App",
            "fileName": "http://localhost:3003/index.js",
            "columnNumber": 51
          }
        }
      ])
    

  }, []);
  if (!peopleData || !planetsData) return 'Loading...';
   

  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {peopleData.map((person, index) => (

        < Character key={index} data={person}  />
      ))}
      {/* Map over the data in state, rendering planet names */}
      {/* <div className="character-card">
        <h3 className="character-name"></h3>
        <p>
          {planetsData.map((person) => (
            <span className="character-planet">
              {person.planet}
            </span>
          ))}
        </p>
      </div> */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
