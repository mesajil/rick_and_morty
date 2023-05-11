import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, onRandom }) {
    

    return (
        <nav>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/">
                <button>Home</button>
            </Link>
            <SearchBar onSearch={onSearch} />
            <button onClick={onRandom}>Agregar random</button>
        </nav>
    )
}

