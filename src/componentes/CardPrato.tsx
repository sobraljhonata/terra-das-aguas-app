import React, { FC } from "react";
import "../estilos/CardPrato.css";
import { Link } from "react-router-dom";

interface CardPratoProps {
  id?: number;
  nome: string;
  cozinha: string;
  descricaoCurta: string;
  imagem: string;
  prazoValidade?: Date; // Opcional, caso queira adicionar no futuro
}

const CardPrato: FC<CardPratoProps> = (props) => {
  return (
    <>
      <div className="prato-card">
        <div className="menu-container">
          <button className="menu-button" onClick={() => {}}>
            &#x22EE;
          </button>
          <div className="dropdown-menu">
            <Link to={`/editar-prato/${props.id}`} className="dropdown-item">
              Editar Prato
            </Link>
            <Link to={`/deletar-prato/${props.id}`} className="dropdown-item">
              Deletar Prato
            </Link>
            <Link to={`/detalhes-prato/${props.id}`} className="dropdown-item">
              Ver Detalhes
            </Link>
          </div>
        </div>
        <img
          src={props.imagem}
          alt="Feijoada brasileira"
        />
        <h2 className="nome-prato">{props.nome}</h2>
        <p className="cozinha-prato">{props.cozinha}</p>
        <p className="descricao-curta-prato">{props.descricaoCurta}</p>
        <Link to={`/detalhes-prato/${props.id}`} className="btn">
          Ver Detalhes
        </Link>
      </div>
    </>
  );
};

export default CardPrato;
