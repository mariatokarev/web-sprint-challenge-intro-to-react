import React, {useState, useEffect} from 'react';


function Character(props) {
    const [showHomeworld, setShowHomeworld] = useState(false);
    const [planetData, setPlanetData] = useState(null);
    
      
    useEffect(() => {
        if (showHomeworld) {
          fetchPlanetData();
        }
      }, [showHomeworld]);
    
      const toggleHomeworld = () => {
        setShowHomeworld(!showHomeworld);
      };
    
      return (
        <div className="character-card">
      <h3
        onClick={toggleHomeworld} className={`character-name ${showHomeworld ? 'active' : ''}`}
       
      >
        {props.data.name}
      </h3>
      <p>
        Planet:
        <span className={`character-planet ${planetData ? '' : 'Loading...'}`}>
           
        </span>
      </p>
    </div>
  );
      }
    
  
    
export default Character
