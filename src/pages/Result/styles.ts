import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 60%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  animation: ${breatheAnimation} 2s infinite;
  margin-bottom: 20%;
`