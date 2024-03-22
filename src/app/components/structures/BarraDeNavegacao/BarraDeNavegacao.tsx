import { IconeDeSecao } from "../../atoms/IconeDeSecao/IconeDeSecao";
import { NomeDaSecao } from "../../atoms/NomeDaSecao/NomeDaSecao";
import { EstiloBarraDeNavegacao } from "./EstiloBarraDeNavegacao";

export const BarraDeNavegacao = () => {
  
  const menuDeSecoes = [
    { id: 1, icone: "caminho/", nomeDaSecao: "Principal" },
    { id: 2, icone: "caminho/", nomeDaSecao: "Estude" },
    { id: 3, icone: "caminho/", nomeDaSecao: "Criação de Cards" },
    { id: 4, icone: "caminho/", nomeDaSecao: "Banco de Decks" },
    { id: 5, icone: "caminho/", nomeDaSecao: "Progresso" },
    { id: 6, icone: "caminho/", nomeDaSecao: "Configurações" },
    { id: 7, icone: "caminho/", nomeDaSecao: "Sair" },
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
              {menuDeSecoes.map((menuDeSecoes) => (
                <li key={menuDeSecoes.id}>
                    <IconeDeSecao
                      icone={menuDeSecoes.icone}
                      alt={menuDeSecoes.nomeDaSecao}
                    />
                  <NomeDaSecao nome={menuDeSecoes.nomeDaSecao} />
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </EstiloBarraDeNavegacao>
    </>
  );
};
