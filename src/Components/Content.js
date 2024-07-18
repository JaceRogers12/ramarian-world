import React from "react";
import {information} from "../information";

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
            <h2 className="infoName" >{info}</h2>
            {current["title"]
                && <select name="topic" value={topic} onChange={event => topicChange(event) } >
                    {optionsMaker()}
                </select>
            }
            {current["subheading"]
                && <p className="subheading" >{current["subheading"]}</p>
            }
            {current["image"]
                && <img src={current["image"]} alt={`${current["title"]} Image`} className="contentImage" />
            }
                {current["text"] && current["text"].map((para, i) => {
                    return <p className="text" key={i} >{para}</p>
                })}
        </div>
    )
}

export default Content;