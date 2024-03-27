import { EstiloIconeDeSecao } from "./EstiloIconeDeSecao";

interface IconeDeSecaoProps {
  icone: string;
  alt: string;
}

export const IconeDeSecao = ({ icone, alt }: IconeDeSecaoProps) => {
  return (
    <EstiloIconeDeSecao>
        <div>
            <img src={icone} alt={`Ícone da Seção ${alt}`} />
        </div>
    </EstiloIconeDeSecao>
  );
};
