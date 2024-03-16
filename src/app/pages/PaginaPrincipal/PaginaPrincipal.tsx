import { BarraDeNavegacao } from "../../components/structures/BarraDeNavegacao/BarraDeNavegacao";
import { BarraDePesquisa } from "../../components/organisms/BarraDePesquisa/BarraDePesquisa";
import { ConteudoPrincipal } from "../../components/structures/ConteudoPrincipal/ConteudoPrincipal";
import { PainelDoUsuario } from "../../components/structures/PainelDoUsuario/PainelDoUsuario";
import { ContainerPrincipal } from "./EstiloPaginaPrincipal";

//O Container principal irá renderizar a estruturas vinda de .app/structures/
//Lembrar de Zera a formatação da <div> ContainerPrincipal, no arquivo EstiloPaginaPrincipal.ts
export const PaginaPrincipal = () => {
  return (
    <>
      <BarraDeNavegacao />
      <BarraDePesquisa />

      <ContainerPrincipal>
        <ConteudoPrincipal /> <>RENDERIZAÇÃO DAS SEÇÕES DA APLICAÇÃO</>
      </ContainerPrincipal>

      <PainelDoUsuario />
    </>
  );
};
