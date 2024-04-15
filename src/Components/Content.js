import React from "react";
import {information} from "../Information";

function Home (props) {
    const info = props.information;
    return (
        <div className="content">
            <h2>{info}</h2>
            {information[info] && <p>{information[info]}</p>}
        </div>
    )
}

export default Home;