import { createGlobalStyle } from "styled-components";
import ImagemDeFundoPrincipalDoBody from "../../assets/images/ImagemDeFundoPrincipal.jpeg";

export const EstiloGlobal = createGlobalStyle`

    body {
        background-color: #E063FF;
        //background-image: url(${ImagemDeFundoPrincipalDoBody});
        //background-repeat: no-repeat; // Impede que a imagem se repita
        //background-size: cover; // Ajusta o tamanho da imagem para cobrir toda a área do body
    }

    .App {
        width: 1380px;
        height: 900px;
        background: #DCFD00;
        padding: 1rem;
        border-radius: 1rem;
        border: 2px solid #01090C;
        box-shadow: 0.4rem 0.4rem #01090C;
        //overflow: hidden;
        color: black;
    }

    .containerprincipal {
        background: #FCFCFC;
        padding: 1rem;
        border-radius: 1rem;
        border: 2px solid #01090C;
        box-shadow: 0.4rem 0.4rem #01090C;
        color: black;
    }
`;