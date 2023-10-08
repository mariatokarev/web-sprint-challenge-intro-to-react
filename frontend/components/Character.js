import React, {useState, useEffect} from 'react';


function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);
  const [planetData, setPlanetData] = useState([]);
  useEffect(() => {
    if (showHomeworld) {
      fetchPlanetData();
    }
  }, [showHomeworld]);


  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  const fetchPlanetData = () => {
    fetch('http://localhost:9009/api/planets')
      .then((response) => response.json())
      .then((planets) => {
        console.log(planets)

        setPlanetData(planets[0].name);
        console.log(planetData)
    //     if (Array.isArray(data) && data.length > 0) {
         
    //      } else {
    //     setPlanetData('No planet data available');
    // }
      })
      .catch((error) => {
        console.error('Error fetching planet data:', error);
       });
  }

  return (
    <div className="character-card">
      <h3
        className={`character-name ${showHomeworld ? 'active' : ' '}`}
        onClick={toggleHomeworld}
      >
        {props.data.name}
      </h3>

      {showHomeworld && (
        <p>
        Planet:
         <span className='character-planet'>{planetData ? planetData.name :'Loading'}</span>
           {/* Use the same markup with the same attributes as in the mock */}
        </p>
      )}
    </div>
  );
}
export default Character
