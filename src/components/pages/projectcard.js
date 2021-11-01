import React from "react";

export default function PorfolioCard(props) {
  return (
    <button
      style={{
        display: "flex",
        flexWrap: "wrap",
        
    width: "80%",
    float: "left",
    marginLeft: "170px",
    marginBottom: "80px",
    padding: "90px",
        paddingBottom:"100px",
        backgroundImage: `url(/images/${props.img})`,
        backgroundSize:"100%",
        opacity:"0.8",
        fontWeight:"bolder"
      }}
      cName={props.cName}
      onClick={() => {
        window.location = props.appLink;
      }}
    >
      <div style={{ backgroundColor:"White", PaddingLeft:"-100px", borderBlock:"solid", }} cName="workcard-description">
        <h4 >{props.title}</h4>
        <p > {props.tech}</p>
        <p  className="workcards-links">
          <a href={props.repoLink}>GitHub Repo</a>
        </p>
      </div>
    </button>
  );
}
