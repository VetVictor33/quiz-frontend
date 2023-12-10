import styled from "styled-components";

export const MainTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.textColor.secondary};
  margin-bottom: 80px; 
`

export const GreetingsForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 8px;

  button{
    font-size: 16px;
    margin: 0 auto;
  }

`