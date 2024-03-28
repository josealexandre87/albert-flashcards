import { EstiloIconeDeSecao} from "./EstiloIconeDeSecao";
interface IconeDeSecaoProps {
  classe: string;
  icone: string;
  alt: string;
}

export const IconeDeSecao = ({ classe, icone, alt }: IconeDeSecaoProps) => {
  return (
    <>
      <EstiloIconeDeSecao>
        <span>
          <img className={classe} src={icone} alt={`Ícone da Seção ${alt}`} />
        </span>
      </EstiloIconeDeSecao>
    </>
  );
};
