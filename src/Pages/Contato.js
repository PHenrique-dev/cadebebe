import React from "react";
import "../Styles/Contato.css";
import image from "../Assets/back.jpg"

function Contato() {
    return (
        <div className="contato">
            <div className="leftSide" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="rigthSide">
                <h1>Contate-nos</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Nome Completo</label>
                    <input name="name" placeholder="Coloque seu nome completo..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Coloque seu email..." type="email" />
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        rows="6"
                        placeholder="Sua mensagem..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit" className="msg"> Enviar Mensagem</button>
                </form>
            </div>
        </div>
    );
}

export default Contato;
