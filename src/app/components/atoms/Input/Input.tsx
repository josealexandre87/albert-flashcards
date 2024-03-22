
import styled from 'styled-components';

const StyledInput = styled.input`
background: #FCFCFC;
padding: 1rem;
margin: 1em;
border-radius: 2rem;
border: 2px solid #01090C;
box-shadow: 0.2rem 0.2rem #01090C;
color: #01090C;
`;

export const Input = () => {
  return <StyledInput type="text" placeholder="Pesquisar..." />;
};