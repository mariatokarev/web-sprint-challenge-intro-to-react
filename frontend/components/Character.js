import React, {} from 'react';


function Character(props) {
   const [isSelected, setIsSelected] = useState(false);

   const handleCardClick = () => {
      if (!isSelected) {
        setIsSelected(true);
        onCharacterClick(character);
      }
    };
 
   return (
     <div
       className={`character-cards ${isSelected ? 'selected' : ''}`}
       onClick={handleCardClick}
     >
       <h3 className='character-name'>{character.name}</h3>
      
       {isSelected && (
         <p>
           Planet:
           <span className='character-planet'>{planet.name}</span>
         </p>
       )}
     </div>
   );
 }

 
 
 
 
 
 
 Regenerate
 
  
  export default Character;
