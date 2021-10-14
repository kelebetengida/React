import React from "react";

export default function PorfolioCard(props) {
    return (
        <button style={{ display: "flex", backgroundColor: "gradient(90deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)", justifyContent: "center", flexWrap: "wrap", margin: ".9rem", width: "90%", padding: "10px", height: "100%" }} cName={props.cName} onClick={() => { window.location = props.appLink }}>

            < div cName="workcard-description" >
                <h4>{props.title}</h4>
                <p>{props.tech}</p>
                <p className="workcards-links">
                    <a href={props.repoLink}>GitHub Repo</a>
                </p>
            </div >
        </button >
    )
}