
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Input = () => {
  return <StyledInput type="text" placeholder="Pesquisar..." />;
};