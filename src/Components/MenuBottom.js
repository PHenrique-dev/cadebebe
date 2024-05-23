import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/MenuBottom.css'
function MenuBottom() {
    return(
      <div className="rightSide">
        <Link to="/">Inicio</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/contato">Contato</Link>
      </div>
    )
}
export default MenuBottom;