import React from "react";
import "../Styles/Catalogo.css";
import { CartList } from '../Helpers/CatList'
import CatItem from "../Components/CatItem";

function Catalogo() {
    return (
        <div className="catalogo">
            <h1 className="catTitle">Nosso Catálogo</h1>
            <div className="catList">{CartList.map((catItem, key) => {
                return <CatItem key={key} image={catItem.image} name={catItem.name} price={catItem.price} tamanho={catItem.tamanho} />
            })}
            </div>
        </div>
    );
}

export default Catalogo;
