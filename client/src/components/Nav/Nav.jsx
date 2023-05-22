import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "../"

export default function Nav({ onSearch, onRandom, logout }) {
    const location = useLocation()

    return (
        <nav>
            {/* About page */}
            <Link to="/about">
                <button>About</button>
            </Link>
            {/* Homepage */}
            <Link to="/home">
                <button>Home</button>
            </Link>
            {/* Favorites */}
            <Link to="/favorites">
                <button>Favorites</button>
            </Link>
            {/* Logout */}
            <button onClick={logout}>Logout</button>
            
            {/* Home components */}
            {(location.pathname === '/home')
                ? <div>
                    {/* SearchBar */}
                    <SearchBar onSearch={onSearch} />
                    {/* Random button */}
                    <button onClick={onRandom}>Add random</button>
                </div>
                : <div></div>
            }
        </nav>
    )
}

