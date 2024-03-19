import styled from "styled-components";

interface ButtonProps {
  children: string;
}

const StyledButton = styled.button`
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 1px solid var(--button_outline_color);
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
