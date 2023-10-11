import React, {useState, useEffect} from 'react';


function Character(props) {
    const [showHomeworld, setShowHomeworld] = useState(false);
    const [planetData, setPlanetData] = useState(null);
    
      };
      const toggleHomeworld = () => {
        setShowHomeworld(!showHomeworld);
      }
        
    
    useEffect(() => {
        if (showHomeworld) {
            fetchPlanetData();
          }
        }, [showHomeworld]);
        
      
       
    
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
        <span className={`character-planet ${planetData ? '' : 'loading'}`}>
          {planetData ? planetData : 'Loading'}
        </span>
      </p>
    </div>
  );

  
    
export default Character
