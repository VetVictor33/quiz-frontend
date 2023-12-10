import { Button } from "@components/Button"
import { QuizBox, QuizButtonsWrapper } from "@components/Quiz"
import { useQuiz } from "@hooks/useQuiz"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { QuizForm } from "./components/QuizForm"

export function Quiz() {
  const methods = useForm()
  const navigateTo = useNavigate()
  const { getCurrentQuestion, nextQuestionId, currentQuestionIndex, questions } = useQuiz()
  const { quizId } = useParams<{ quizId: string }>()
  const quiz = getCurrentQuestion(quizId!)!

  const handleQuizChange = (action: 'next' | 'previous') => {
    if (action == 'next') {
      const id = nextQuestionId(currentQuestionIndex + 1)
      if (id) {
        navigateTo(`/quiz/${id}`)
      } else {
        navigateTo('/resultado')
      }
    } else {
      const id = nextQuestionId(currentQuestionIndex - 1)
      if (id) {
        navigateTo(`/quiz/${id}`)
      } else {
        navigateTo('/')
      }
    }
  }

  return (
    <QuizBox>
      <FormProvider {...methods}>
        <QuizForm quiz={quiz}>
          <span>{currentQuestionIndex + 1} de {questions.length}</span>
          <QuizButtonsWrapper>
            <Button type="button" $color="#000" disabled={currentQuestionIndex === 0}
              onClick={() => handleQuizChange('previous')}>
              Anterior</Button>
            <Button type="button" $color="#000"
              onClick={() => handleQuizChange('next')}>
              {currentQuestionIndex + 1 === questions.length ? 'Enviar' : 'Próxima'}
            </Button>
          </QuizButtonsWrapper>
        </QuizForm>
      </FormProvider>
    </QuizBox>
  )
}