import { addNewAnswer, addQuestions, addUserName } from "@contexts/quizContext";
import { QuizRequest } from "@interfaces/api";
import { QuizAnswer, QuizQuestion } from "@interfaces/quiz";
import { api } from "@libs/axios";
import { useStateMachine } from "little-state-machine";

export function useQuiz() {
  const { actions, state } = useStateMachine({ addUserName, addQuestions, addNewAnswer })

  const addNameActions = (name: string) => actions.addUserName(name)
  const addQuestionsAction = async () => {
    const { data: { quiz } } = await api.get<QuizRequest>('/quiz')
    actions.addQuestions(quiz)
    return quiz[0]
  }
  const addAnswersAction = (answer: QuizAnswer) => actions.addNewAnswer(answer)

  function nextQuestionId(nextQuestionIndex: number) {
    const questionsLength = state.questions.length
    if (nextQuestionIndex > questionsLength) {
      return null
    }

    if (state.questions[nextQuestionIndex]) {
      state.currentQuestionIndex = nextQuestionIndex
      return state.questions[nextQuestionIndex]._id
    }

    return null
  }

  function getCurrentQuestion(questionId: string): QuizQuestion | undefined {
    const currentQuestion = state.questions.find((question) => question._id === questionId)
    return currentQuestion
  }

  return {
    addUserName: addNameActions,
    addQuestions: addQuestionsAction,
    addNewAnswer: addAnswersAction,
    nextQuestionId,
    getCurrentQuestion,
    currentQuestionIndex: state.currentQuestionIndex,
    game: state.game,
    answers: state.game.answers,
    questions: state.questions
  }
}