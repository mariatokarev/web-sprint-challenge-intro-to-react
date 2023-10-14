import React, {} from 'react';


function Character(props) {
   const [isSelected, setIsSelected] = useState(false);

   const handleCardClick = () => {
     
      setIsSelected(!isSelected);
    
    };
 
   return (
     <div
       className={`character-cards ${isSelected ? 'selected' : ''}`}
       onClick={handleCardClick}
     >
       <h3 className='character-name'>{Character.name}</h3>
      
       {isSelected && (
         <p>
           Planet:
           <span className='character-planet'>{planet.name}</span>
         </p>
       )}
     </div>
   );
 }

 
 
 
 
 
 
 
 
  
  export default Character;
