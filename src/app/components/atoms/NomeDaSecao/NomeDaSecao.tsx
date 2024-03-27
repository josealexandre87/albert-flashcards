import { EstiloNomeDaSecao } from "./EstiloNomeDaSecao";

interface NomeDaSecaoProps {
  nome: string;
}

export const NomeDaSecao = ({ nome }: NomeDaSecaoProps) => {
  return (
    <EstiloNomeDaSecao>
      <span>{nome}</span>
    </EstiloNomeDaSecao>
  );
};
