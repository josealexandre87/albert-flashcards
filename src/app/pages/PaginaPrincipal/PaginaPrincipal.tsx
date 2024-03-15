import { BarraDeNavegacao } from "../../components/structures/BarraDeNavegacao/BarraDeNavegacao";
import { BarraDePesquisa } from "../../components/organisms/BarraDePesquisa/BarraDePesquisa";
import { ConteudoPrincipal } from "../../components/structures/ConteudoPrincipal/ConteudoPrincipal";
import { PainelDoUsuario } from "../../components/structures/PainelDoUsuario/PainelDoUsuario";
import { ContainerPrincipal } from "./EstiloPaginaPrincipal";

//O Container principal irá renderizar a esturua vinda de ./structure/.
//Lembrar de Zera a formatação da <div> ContainerPrincipal, no arquivo HomeStyle.ts
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
