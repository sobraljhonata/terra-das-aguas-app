import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Prato } from '../tipos';
import { useNavigate } from 'react-router-dom';



const ContentDetalhesPrato: React.FC<Prato> = (props) => {

  const navigate = useNavigate();

  return (
    <>
      <img src={props.imagem} alt={props.nome} />
      <h1>{props.nome}</h1>
      <p><strong>Cozinha:</strong> {props.cozinha}</p>
      <p><strong>Valor:</strong> R${props.valor.toFixed(2)}</p>
      <p><strong>Descrição da sua experiência Gastronômica:</strong> {props.descricao_detalhada}</p>
      <button onClick={() => navigate('/')}>Voltar</button>
    </>
  )
}

const PratoDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [dish, setDish] = useState<Prato | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchPratoDetalhes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/pratos/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dish details');
        }
        const data = await response.json();
        setDish(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPratoDetalhes();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!dish) {
    return <p>Dish not found</p>;
  }

  return (
    <div className="DishDetails">
      <div className="dish-details-card">
        <ContentDetalhesPrato {...dish} />
      </div>
    </div>
  );
};

export default PratoDetalhes;