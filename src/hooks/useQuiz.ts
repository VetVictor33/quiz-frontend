import { newGame, changeCorrectAnswers, changeCurrentQuestionIndex, addNewAnswer, addQuestions, addUserName } from "@contexts/quizContext";
import { QuizRequest, QuizResponse } from "@interfaces/api";
import { QuizAnswer, QuizQuestion } from "@interfaces/quiz";
import { api } from "@libs/axios";
import { useStateMachine } from "little-state-machine";

export function useQuiz() {
  const { actions, state } = useStateMachine({
    addUserName, addQuestions, changeCurrentQuestionIndex, addNewAnswer, changeCorrectAnswers, newGame
  })

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
      actions.changeCurrentQuestionIndex(nextQuestionIndex)
      return state.questions[nextQuestionIndex]._id
    }

    return null
  }

  function getCurrentQuestion(questionId: string): QuizQuestion | undefined {
    const currentQuestion = state.questions.find((question) => question._id === questionId)
    return currentQuestion
  }

  async function getResults() {
    const { data: { correctAnswers } } = await api.post<QuizResponse>('/check-quiz', {
      name: state.game.playerName,
      answers: state.game.answers
    })
    actions.changeCorrectAnswers(correctAnswers)
  }

  return {
    addUserName: addNameActions,
    addQuestions: addQuestionsAction,
    addNewAnswer: addAnswersAction,
    nextQuestionId,
    getCurrentQuestion,
    getResults,
    currentQuestionIndex: state.currentQuestionIndex,
    game: state.game,
    answers: state.game.answers,
    questions: state.questions,
    correctAnswers: state.correctAnswers,
    newGame: actions.newGame
  }
}