import React from "react";
import {information} from "../Information";

function Home (props) {
    const {info, topic, topicChange} = props;
    
    const optionsMaker = () => {
        let result = [];
        let count = 0;
        for (let property in information[info]) {
            result.push(<option value={property} key={count++}>{property}</option>)
        }
        return result;
    }
    
    //console.log(optionsMaker());
    return (
        <div className="content" >
            <h2>{info}</h2>
            <span >Topics: </span>
            <select name="topic" value={topic} onChange={event => topicChange(event)} >
                {optionsMaker()}
            </select>
        </div>
    )
}

export default Home;