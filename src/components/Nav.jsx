import SearchBar from "./SearchBar.jsx";

export default function Nav ({ onSearch, onRandom }) {
    // const onClick = () => {

    // }


    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button onClick={onRandom}>Agregar random</button>
        </nav>
    )
}

