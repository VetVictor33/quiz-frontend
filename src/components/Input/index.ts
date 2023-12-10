import styled from "styled-components";

export const Input = styled.input`
  border: unset;
  &:focus{
    outline: none;
  }

  background-color: '#FFF';
  border-radius: 8px;
  padding: 8px;
  border: 1px solid white;

  &.error {
    border: 1px solid red;
  }
`