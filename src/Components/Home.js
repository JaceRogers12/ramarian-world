import React from "react";
import { summary } from "../Information";

function Home () {

    return (
        <div className="content">
            <p>{summary.main}</p>
        </div>
    )
}

export default Home;