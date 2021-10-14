import React from "react";
import { Document } from "react-pdf"
import RESUME from "../Assets/RESUME.pdf"
import { Page } from 'react-pdf'
const Resume = () => {
    return (
        <div style={{ background: "linear-gradient(360deg, #AFD275 9%, #C2CAD0 100%, #AFD275 9%)", height: "150%" }}>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Resume</h1>
            <Document file={RESUME}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );

};

export default Resume;