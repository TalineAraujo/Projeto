import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";


function Home(){
    return(
        <home className="home">
            <Header/>
            <Hero/>
            <h2>Conteudo da pagina home</h2>
        </home>
    )
}

export default Home; 
