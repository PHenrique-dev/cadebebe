import React from "react";
import { Link } from 'react-router-dom';
import Inicio from "../Assets/O68Z3N0_2-1.jpg"
import "../Styles/Home.css"
function Home(){
    return(
        <div className="home">
            <img src={Inicio} alt="Inicio"/>
            <h1>Um Sorriso a cada passo!!</h1>
            <Link to="/catalogo">Ver Catálogo</Link>
        </div>
    )
}
export default Home