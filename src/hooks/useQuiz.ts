import { addNewAnswer, addQuestions, addUserName } from "@contexts/quizContext";
import { QuizRequest } from "@interfaces/api";
import { QuizAnswer } from "@interfaces/quiz";
import { api } from "@libs/axios";
import { useStateMachine } from "little-state-machine";

export function useQuiz() {
  const { actions, state } = useStateMachine({ addUserName, addQuestions, addNewAnswer })

  const addNameActions = (name: string) => actions.addUserName(name)
  const addQuestionsAction = async () => {
    const { data: { quiz } } = await api.get<QuizRequest>('/quiz')
    actions.addQuestions(quiz)
  }
  const addAnswersAction = (answer: QuizAnswer) => actions.addNewAnswer(answer)

  function nextQuestionId(nextQuestionIndex: number) {
    const questionsLength = state.questions.length
    const currentQuestionIndex = state.currentQuestionIndex
    if (currentQuestionIndex + 1 === questionsLength || nextQuestionIndex >= questionsLength) {
      return null
    }
    return state.questions[nextQuestionIndex]._id
  }

  const game = state.game
  const answers = state.game.answers
  const questions = state.questions

  return {
    addUserName: addNameActions,
    addQuestions: addQuestionsAction,
    addNewAnswer: addAnswersAction,
    nextQuestionId,
    game,
    answers,
    questions
  }
}