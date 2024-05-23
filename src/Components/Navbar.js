import React from "react";
import Logo from "../Assets/435762163_2822109891280408_7450111231118052636_n-removebg-preview.png"
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import { FaSearch } from "react-icons/fa";
function Navbar(){
    return(
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} alt="Logo"  />
                <input type="text" placeholder="O que você deseja?" />
                <FaSearch/>
            </div>
            <div className="rightSide">
                <Link to="/">Inicio</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/contato">Contato</Link>
            </div>
        </div>
    )
}
export default Navbar