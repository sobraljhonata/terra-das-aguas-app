import React, { useEffect, useState } from "react";
import "../estilos/FormularioPrato.css"; // Importando o CSS específico para o componente
import { useParams } from "react-router-dom";
import { Prato } from "../tipos";

const FormularioPrato: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [dish, setDish] = useState<Prato | null>(null);

  useEffect(() => {
    const fetchPrato = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:3000/pratos/${id}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar o prato");
          }
          const data = await response.json();
          setDish(data);
        } catch (error) {
          console.error("Erro ao buscar o prato:", error);
        }
      }
    };
    if (id) {
      fetchPrato();
    }
  }, [id]);
  return (
    <>
      <div className="form-container">
        <h1>Cadastro de Pratos</h1>
        <p>Bem-vindo ao sistema de cadastro de pratos!</p>
        <input
          type="text"
          value={dish ? dish.nome : ""}
          onChange={(e) => {
            if (dish) {
              setDish({ ...dish, nome: e.target.value });
            }
          }}
          name="nome"
          placeholder="Digite o nome do prato"
        />
        <input
          value={dish ? dish.cozinha : ""}
          onChange={(e) => {
            if (dish) {
              setDish({ ...dish, cozinha: e.target.value });
            }
          }}
          type="text"
          name="cozinha"
          placeholder="Digite o tipo de cozinha do prato"
        />
        <input
          value={dish ? dish.descricao_resumida : ""}
          onChange={(e) => {
            if (dish) {
              setDish({ ...dish, descricao_resumida: e.target.value });
            }
          }}
          type="text"
          name="descricao-resumida"
          placeholder="Digite a descrição resumida do prato"
        />
        <input
          value={dish ? dish.descricao_detalhada : ""}
          onChange={(e) => {
            if (dish) {
              setDish({ ...dish, descricao_detalhada: e.target.value });
            }
          }}
          type="text"
          name="descricao-detalhada"
          placeholder="Digite a descrição detalhada do prato"
        />
        <input
          value={dish ? dish.imagem : ""}
          onChange={(e) => {
            if (dish) {
              setDish({ ...dish, imagem: e.target.value });
            }
          }}
          type="text"
          name="imagem"
          placeholder="Digite a url da imagem do prato"
        />
        <input value={dish ? dish.valor : 0} onChange={(e) => {
            if (dish) {
              const valor = parseFloat(e.target.value);
              setDish({ ...dish, valor: isNaN(valor) ? 0 : valor });
            }
        }} type="text" name="valor" placeholder="Digite o valor do prato" />
        <button type="submit">Cadastrar Prato</button>
      </div>
    </>
  );
};

export default FormularioPrato;
