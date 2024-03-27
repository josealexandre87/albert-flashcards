import { NomeDaSecao } from "../../atoms/NomeDaSecao/NomeDaSecao";
import { EstiloBarraDeNavegacao } from "./EstiloBarraDeNavegacao";
import iconeDaPaginaPrincial from "../../../assets/icons/iconesDeSecao/home.png";
import iconeEstude from "../../../assets/icons/iconesDeSecao/estude.png";
import iconeCriacaoDeCards from "../../../assets/icons/iconesDeSecao/criacaodecards.png";
import iconeBancoDeDecks from "../../../assets/icons/iconesDeSecao/banckdedecks.png";
import iconeProgresso from "../../../assets/icons/iconesDeSecao/progresso.png";
import iconeConfiguracoes from "../../../assets/icons/iconesDeSecao/configuracoes.png";
import IconeSair from "../../../assets/icons/iconesDeSecao/sair.png";

interface Secao {
  id: number;
  caminho: string;
  nomeDaSecao: string;
}

export const BarraDeNavegacao = () => {
  
  const menuDeSecoes: Secao[] = [
    { id: 1, caminho: iconeDaPaginaPrincial, nomeDaSecao: "Principal" },
    { id: 2, caminho: iconeEstude, nomeDaSecao: "Estude" },
    { id: 3, caminho: iconeCriacaoDeCards, nomeDaSecao: "Criação de Cards" },
    { id: 4, caminho: iconeBancoDeDecks, nomeDaSecao: "Banco de Decks" },
    { id: 5, caminho: iconeProgresso, nomeDaSecao: "Progresso" },
    { id: 6, caminho: iconeConfiguracoes, nomeDaSecao: "Configurações" },
    { id: 7, caminho: IconeSair, nomeDaSecao: "Sair" },
  ];

  return (
    <>
      <EstiloBarraDeNavegacao>
        <aside className="barra-de-navegacao">
          <div className="titulo">
            <h1>Albert: Flashcards</h1>
          </div>
          <section className="menu-de-secoes">
            <ul>
              {menuDeSecoes.map((secao) => (
                <li key={secao.id}> {/*RESOLVER O PROBLEMA DA TAG <img> */}
                    <img 
                      className={`icone-da-secao-${secao.nomeDaSecao.toLowerCase()}`}
                      src={secao.caminho}
                      alt={secao.nomeDaSecao}
                    />
                    <NomeDaSecao nome={secao.nomeDaSecao} />
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </EstiloBarraDeNavegacao>
    </>
  );
};
