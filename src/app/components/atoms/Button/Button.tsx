import styled from "styled-components";

interface ButtonProps {
  children: string;
}

const StyledButton = styled.button`
  --button_radius: 2em;
  --button_color: #A4E8FF;
  --button_outline_color: #01090C;
  font-size: 16px;
  font-weight: bold;
  padding: 0px;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  box-shadow: 0.1em #01090C;
  

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    color: var(--button_outline_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;

  }

  &:hover .button_top {
    transform: translateY(-0.33em);
  }

  &:active .button_top {
    transform: translateY(0);
  }
`;

export const Button = ({ children }: ButtonProps) => {
  return (
      <StyledButton>
        <span className="button_top">{ children }</span>
      </StyledButton>
  );
};
