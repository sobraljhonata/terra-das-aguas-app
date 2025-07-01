export interface Dish {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  description: string;
}

export interface Prato {
  id: number;
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  valor: number;
  imagem: string;
  descricao_detalhada?: string;
}

export interface PratoCardProps {
  id: number;
  name: string;
  cuisine: string;
  imageUrl: string;
  description: string;
}
