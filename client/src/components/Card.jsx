import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from '../redux/actions'
import { connect } from "react-redux"
import { useState } from "react";
import { useEffect } from "react";

function Card({ character, onClose, addFavorite, removeFavorite, myFavorites, showCloseButton }) {
   const [isFav, setIsFav] = useState(false)

   /**
    * Remove a character from the list.
    * @returns 
    */
   const closeCharacter = () => onClose(character.id)

   const handleFavorite = () => {
      isFav
         ? removeFavorite(character.id)
         : addFavorite(character)
      setIsFav((isFav) => !isFav)
   }

   useEffect(() => {
      if (myFavorites.find(e => e.id === character.id))
         setIsFav(() => true)
   }, [])

   return (
      <div>
         {/* Close button */}
         {
            showCloseButton
               ? <button onClick={closeCharacter}>X</button>
               : <div></div>
         }

         {/* Favorite button */}
         {
            isFav
               ? <button onClick={handleFavorite}>❤️</button>
               : <button onClick={handleFavorite}>🤍</button>
         }

         {/* Character Detail */}
         <Link to={`/detail/${character.id}`}>
            <h2>{character.name}</h2>
         </Link>

         {/* Character */}
         <h2>{character.species}</h2>
         <img src={character.image} alt={`${character.name} image`} />
      </div>
   );
}

const mapStateToProps = (state) => ({
   myFavorites: state.myFavorites,
})

const mapDispatchToProps = (dispatch) => ({
   // myFavorites
   addFavorite: (character) => dispatch(addFavorite(character)),
   removeFavorite: (id) => dispatch(removeFavorite(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Card);