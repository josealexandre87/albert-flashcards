
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';


const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
`;

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Input />
      <Button>Pesquisar</Button>
    </StyledSearchBar>
  );
};