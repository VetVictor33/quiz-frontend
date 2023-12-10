import { QuizBox } from "@components/Quiz"
import { useQuiz } from "@hooks/useQuiz"
import { ResultBox } from "./styles"
import { Button } from "@components/Button"
import { useNavigate } from "react-router-dom"

export function Result() {
  const navigateTo = useNavigate()
  const { correctAnswers, newGame, questions } = useQuiz()

  const restart = () => {
    newGame()
    navigateTo(`/quiz/${questions[0]._id}`)
  }
  return (
    <QuizBox>
      <ResultBox>
        <h1>Resultado</h1>
        <h3>Você acerto {correctAnswers} questões!</h3>
      </ResultBox>
      <Button $color="#000" onClick={restart}>Tentar novamente</Button>
    </QuizBox>
  )
}