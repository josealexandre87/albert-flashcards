
import styled from 'styled-components';

const StyledInput = styled.input`
background: #FFFFFF;
padding: 1rem;
margin: 1em;
border-radius: 2rem;
border: 1px solid #05060f;
box-shadow: 0.2rem 0.2rem #05060f;
color: black;
`;

export const Input = () => {
  return <StyledInput type="text" placeholder="Pesquisar..." />;
};