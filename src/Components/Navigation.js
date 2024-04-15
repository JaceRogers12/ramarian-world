import react from "react";
import {Link} from "react-router-dom";

function Navigation () {
    return (
        <div className="navigation">
            <Link to="/" className="navLink" >Home</Link>
            <Link to="locations" className="navLink" >Locations</Link>
            <Link to="magic" className="navLink" >Magic</Link>
            <Link to="races" className="navLink" >Races</Link>
            <Link to="creatures" className="navLink" >Creatures</Link>
            <Link to="history" className="navLink" >History</Link>
            <Link to="stories" className="navLink" >Stories</Link>
            <Link to="game" className="navLink" >Game</Link>
            <Link to="other" className="navLink" >Other</Link>
        </div>
    )
}

export default Navigation;