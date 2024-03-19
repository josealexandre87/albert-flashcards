
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';


const StyledSearchBar = styled.div`
  background: #FFFFFF;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #05060f;
  box-shadow: 0.4rem 0.4rem #05060f;
  color: black;
`;

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Button> Pesquisar </Button>
      <Input />
    </StyledSearchBar>
  );
};