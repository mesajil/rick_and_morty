import { Link } from "react-router-dom";


export default function Favorite({favorite}) {
    
    return (
       <div>
 
          {/* Character Detail */}
          <Link to={`/detail/${favorite.id}`}>
             <h2>{favorite.name}</h2>
          </Link>
 
          {/* Character */}
          <h2>{favorite.species}</h2>
          <img src={favorite.image} alt={`${favorite.name} image`} />
       </div>
    );
 }