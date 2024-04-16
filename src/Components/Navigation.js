import React from "react";
import {information} from "../Information.js";
import {Link} from "react-router-dom";

function Navigation (props) {
    const {routeChange} = props;

    return (
        <div className="navigation" onClick={() => routeChange()} >
            {information.Routes.map((route, i) => {
                return <Link to={route == "Home"? "/": route.toLowerCase()} key={i}
                    className="navLink" >{route}</Link>
            })}
        </div>
    )
}

export default Navigation;