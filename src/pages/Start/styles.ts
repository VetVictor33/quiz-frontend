import styled from "styled-components";

export const MainTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.textColor.secondary};
  text-align: center;
  margin-top: 28px;
`

export const GreetingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  gap: 8px;

  button{
    font-size: 16px;
    margin: 0 auto;
  }

`