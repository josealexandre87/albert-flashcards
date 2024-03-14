import styled from 'styled-components';

interface ButtonProps {
    children: string;
}

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Button = ({children}: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};