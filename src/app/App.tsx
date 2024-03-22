import { SearchBar } from "./components/molecules/SearchBar/SearchBar";
import { BarraDeNavegacao } from "./components/structures/BarraDeNavegacao/BarraDeNavegacao";
import { EstiloGlobal } from "./global/styles/EstiloGlobal";


export const App = () => {
  return (
    <>
      <EstiloGlobal />
      <div className="App">
        <div className="containerprincipal" >
          <SearchBar />
          <h1>Exemplo de Componentes Atom e Molécula</h1>
          <SearchBar />

          <BarraDeNavegacao />
        </div>
      </div>
    </>
  );
};
