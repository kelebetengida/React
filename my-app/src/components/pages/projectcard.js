import React from "react";

export default function PorfolioCard(props){
    return(
        <button style={{ display: "flex" , flexWrap:"wrap",margin:".9rem", width:"50%", height:"15%" }} cName={props.cName} onClick={() => {window.location = props.appLink}}>
            
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