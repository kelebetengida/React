import React from "react";
import PageContent from "./components/PageProps";
import About from "../Aboutme";

function Page({currentPage}){
    const renderPage=()=>{
        switch(currentPage){
            case "About": 
            return <About/>;
            default: 
            return <About/>;
        }
    }
        return(
            <section>
                <PageContent>{renderPage()}</PageContent>
            </section>
        )
    
}


export default Page();