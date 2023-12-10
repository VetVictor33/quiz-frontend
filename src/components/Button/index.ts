import styled from "styled-components";

export const Button = styled.button<{ $padding?: string, $color?: string }>`
  text-align: center;
  border: unset;
  cursor: pointer;

  border-radius: 4px;
  
  padding: ${(props) => props.$padding ?? '4px'};

  color: ${(props) => props.$color ?? '#FFF'};
  font-weight: bold;
`