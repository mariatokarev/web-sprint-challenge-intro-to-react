import React, {useState} from 'react';


function Character(props) {
   const [isSelected, setIsSelected] = useState(false);

   const handleCardClick = () => {
     
      setIsSelected(!isSelected);
    
    };
 console.log(props)
   return (
     <div
       className={`character-card ${isSelected ? 'selected' : ''}`}
       onClick={handleCardClick}
     >
       <h3 className='character-name'>{props.character.name}</h3>
      
       {isSelected && (
         <p>
           Planet:
           <span className='character-planet'>{props.planet.name}</span>
         </p>
       )}
     </div>
   );
 }

    
  
    
export default Character
