import React from "react";
import "../Styles/Sobre.css";
import { Link } from 'react-router-dom';
import Modelo from '../Assets/IMG_20240526_154731-removebg-preview.png';

function Sobre() {
    return (
        <div className="sobre">
            <h1>Sobre Nossa Loja</h1>
            <div className="conteudo">
                <img src={Modelo} alt="Modelo" className="imagem"/>
                <div className="texto">
                    <p>Bem-vindos à Cadê Bebê, a primeira loja voltada exclusivamente para o público infantil em Igaporã-Ba! Fundada em dezembro de 2009, nossa história começou com o nascimento da minha filha, quando percebi a necessidade de uma loja que oferecesse produtos de qualidade e atendimento personalizado para crianças na nossa cidade.</p>

                    <p>Desde o início, buscamos nos destacar não apenas pela variedade e qualidade dos produtos que oferecemos, mas também pelo compromisso com a satisfação de nossos clientes. Nosso objetivo é proporcionar uma experiência de compra memorável, onde os pais e as crianças se sintam bem-vindos e valorizados.</p>

                    <p>Na Cadê Bebê, estamos empenhados em trazer produtos de alta qualidade que atendam às necessidades e expectativas de nossos clientes. Selecionamos cuidadosamente cada item em nossa loja, buscando sempre por marcas reconhecidas por sua excelência e compromisso com a segurança infantil.</p>

                    <p>Além disso, acreditamos na importância da responsabilidade social e do apoio à nossa comunidade. Regularmente nos envolvemos em iniciativas locais que visam melhorar a vida das crianças e suas famílias, seja através de doações, eventos beneficentes ou parcerias com instituições de caridade.</p>

                    <p>Localizada na Rua 7 de Setembro, no Bairro Centro, em Igaporã-Ba, nossa loja abre suas portas de segunda a sexta-feira, das 08h às 12h e das 14h às 17h. Convidamos você e sua família a nos fazer uma visita e descobrir tudo o que temos a oferecer para os pequenos.</p>

                    <p>Venha nos conhecer e faça parte da família Cadê Bebê!</p>
                </div>
            </div>
            <div className="botao">
            <Link to="/catalogo">Ver Catálogo</Link></div>
        </div>
    );
}

export default Sobre;
