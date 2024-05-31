import React from "react";
import '../Styles/Catalogo.css'

function CatItem({ image, name, price, tamanho }) {
    return (
        <div className="catItem">
            <div className="imagem" style={{ backgroundImage: `url(${image})` }}></div>
            <h1> {name} </h1>
            <p> R$ {price},00 </p>
            <p> Tamanho: {tamanho} </p>
        </div>
    );
}

export default CatItem;
