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

export const StyledQuizForm = styled.form`
  padding: 130px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  span {
    text-align: center;
  }
`

export const QuizTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.textColor.secondary};
  font-weight: 700;
`

export const QuizOptionsWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 8px;

  input {
    margin-right: 10px;

  }
`

export const QuizButtonsWrapper = styled.div`
  display: flex;
  justify-content:center;
  gap: 16px;
`
