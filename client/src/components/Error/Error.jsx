import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div>
            <h1>Oops! Parece que te perdiste.</h1>
            <p>Aqui te dejo unos links útiles:</p>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}