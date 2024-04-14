import react from "react";
import {Link} from "react-router-dom";

function Navigation () {
    return (
        <div className="navigation">
            <Link to="/" >Home</Link>
            <Link to="Locations" >Locations</Link>
            <p>Magic</p>
            <p>Races</p>
            <p>Creatures</p>
            <p>History</p>
            <p>Stories</p>
            <p>Game</p>
            <p>Other</p>
        </div>
    )
}

export default Navigation;