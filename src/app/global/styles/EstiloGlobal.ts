import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    .App {
        width: 1380px;
        height: 900px;
        background: #00ffa0;
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid #05060f;
        box-shadow: 0.4rem 0.4rem #05060f;
        //overflow: hidden;
        color: black;
    }

    .containerprincipal {
        background: #FFFFFF;
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid #05060f;
        box-shadow: 0.4rem 0.4rem #05060f;
        color: black;
    }
`;