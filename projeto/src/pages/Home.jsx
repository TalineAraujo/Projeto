import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
    return (
        <div className="home">
            <Header />
            <Hero />
            <h2>Conteudo da pagina home</h2>
        </div>
    );
}

export default Home;
