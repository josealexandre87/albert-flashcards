import { BarraDeNavegacao } from "../../components/structures/BarraDeNavegacao/BarraDeNavegacao";
import { BarraDePesquisa } from "../../components/organisms/BarraDePesquisa/BarraDePesquisa";
import { ConteudoPrincipal } from "../../components/structures/ConteudoPrincipal/ConteudoPrincipal";
import { PainelDoUsuario } from "../../components/structures/PainelDoUsuario/PainelDoUsuario";
import {
  BordaDaPaginaPrincipal,
  EstiloDoConteudoCentral,
} from "./EstiloPaginaPrincipal";

//Lembrar de Zera a formatação da <div> em EstiloDoConteudoCentral, no arquivo EstiloPaginaPrincipal.ts
export const PaginaPrincipal = () => {
  return (
    <>
      <BordaDaPaginaPrincipal> {/*estilo*/}
        <BarraDeNavegacao /> {/*painel a esquerda*/}
        <BarraDePesquisa /> {/*barra de pesquisa no topo ao centro*/}
        <EstiloDoConteudoCentral> {/*estilo*/}
          <ConteudoPrincipal /> {/*renderiza as seções da aplicação*/}
        </EstiloDoConteudoCentral>
        <PainelDoUsuario /> {/*painel a direita*/}
      </BordaDaPaginaPrincipal>
    </>
  );
};
