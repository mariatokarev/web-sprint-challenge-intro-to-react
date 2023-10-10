import React, {useState, useEffect} from 'react';


function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);
  const [planetData, setPlanetData] = useState([]);

  const toggleHomeworld = () => {
    if (!showHomeworld) {

      fetchPlanetData([]);
    }
   
    setShowHomeworld(!showHomeworld);
  };

  useEffect(() => {
    if (showHomeworld) {
      fetchPlanetData();
    }
  }, [showHomeworld]);

  const fetchPlanetData = () => {
    fetch('http://localhost:9009/api/planets')
      .then((response) => response.json())
      .then((planets) => {
        if (planets.length > 0) {
          setPlanetData(planets[0].name);
        } else {
          setPlanetData('No planet data available');
        }
      })
      .catch((error) => {
        console.error('Error fetching planet data:', error);
      });
  };
 
  return (
    <div className="character-card">
      <h3
        className={`character-name ${showHomeworld ? 'active' : ''}`}
        onClick={toggleHomeworld}
      >
        {props.data.name}
      </h3>
        <p>
          Planet:
          <span className={`character-planet ${planetData ? planetData : 'Loading'}`}
          >
            {planetData}
          </span>

        </p>
     
    </div>
  );
}
export default Character
