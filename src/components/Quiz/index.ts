import styled from "styled-components";

export const QuizBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;

  border-radius: 16px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.textColor.secondary};
`