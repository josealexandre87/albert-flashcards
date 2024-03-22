
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';


const StyledSearchBar = styled.div`
  background: #FCFCFC;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #01090C;
  box-shadow: 0.4rem 0.4rem #01090C;
  color: #01090C;
`;

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Button>Voltar</Button>
      <Input />
      <Button>Matérias</Button>
      <Button>Design</Button>
    </StyledSearchBar>
  );
};