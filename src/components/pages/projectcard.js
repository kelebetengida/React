import React from "react";

export default function PorfolioCard(props) {
  return (
    <button 
      style={{
        display: "flex",
       flexWrap:"wrap",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: ".9rem",
        width: "90%",
        padding: "25px",
        height: "100%",
        backgroundAttachment:"{props.img}"
      }}
      cName={props.cName}
      onClick={() => {
        window.location = props.appLink;
      }}
    >
      <div cName="workcard-description">
          
        <h4>{props.title}</h4>
        <p>{props.tech}</p>
        <p className="workcards-links">
          <a href={props.repoLink}>GitHub Repo</a>
        </p>
      </div>
    </button>
  );
}
