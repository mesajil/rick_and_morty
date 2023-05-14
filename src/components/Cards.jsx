import Card from './Card';

export default function Cards({ characters, onClose, showCloseButton }) {
   return (
      <div>
         {characters.map((character) => {
            return (
               <Card
                  key={character.id}
                  character={character}
                  onClose={onClose}
                  showCloseButton={showCloseButton}
               />
            )
         })}
      </div>
   );
}
