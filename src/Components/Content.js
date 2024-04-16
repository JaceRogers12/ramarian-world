import React from "react";
import {information} from "../Information";

function Content (props) {
    const {info, topic, topicChange} = props;
    let current = information[info][topic];

    const optionsMaker = () => {
        let result = [];
        let count = 0;
        for (let property in information[info]) {
            result.push(<option value={property} key={count++}>{information[info][property]["title"]}</option>)
        }
        return result;
    }
    
    //console.log();
    return (
        <div className="content" >
            <h2>{info}</h2>
            {current["title"]
                && <select name="topic" value={topic} onChange={event => topicChange(event)} >
                    {optionsMaker()}
                </select>
            }
            {current["subheading"] && <p className="subheading" >{current["subheading"]}</p>}
            {current["image"] && <img alt={`${current["title"]} Image`} />}
            <p className="text" >{current["text"]}</p>
        </div>
    )
}

export default Content;