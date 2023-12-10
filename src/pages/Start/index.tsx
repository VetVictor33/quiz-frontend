import { Button, Input, QuizBox } from "@components/index";
import { GreetingsWrapper, MainTitle } from "./styles";

export function Start() {
  return (
    <QuizBox>
      <MainTitle>{'Bem vindo(a) ao Quiz!'}</MainTitle>
      <GreetingsWrapper>
        <Input />
        <Button $color="#000" $padding="8px">
          Iniciar
        </Button>
      </GreetingsWrapper>
    </QuizBox>
  )
}