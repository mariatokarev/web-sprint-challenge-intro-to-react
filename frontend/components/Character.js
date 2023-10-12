import React, {} from 'react';


function Character(props) {
    const { character, planet, onCharacterClick, isPlanetVisible } = props;
  
    return (
      <div className="character-card" onClick={() => onCharacterClick(character)}>
        <h3 className='character-name'>{character.name}</h3>
        {isPlanetVisible && (
          <p>
            Planet:
            <span className='character-planet'>{planet.name}</span>
          </p>
        )}
      </div>
    );
  }
  
  export default Character;
