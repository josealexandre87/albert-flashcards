
import styled from 'styled-components';

const StyledInput = styled.input`
background: #FFFFFF;
padding: 1rem;
margin: 1em;
border-radius: 4rem;
border: 0.5vmin solid #05060f;
box-shadow: 0.4rem 0.4rem #05060f;
color: black;
`;

export const Input = () => {
  return <StyledInput type="text" placeholder="Pesquisar..." />;
};