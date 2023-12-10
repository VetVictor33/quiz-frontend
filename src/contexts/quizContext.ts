import { GlobalState, createStore } from "little-state-machine";
import { QuizAnswer, QuizQuestion } from "src/interfaces/quiz";

createStore(
  {
    game: {
      playerName: '',
      answers: []
    },
    currentQuestionIndex: 0,
    questions: []
  },
  {
    persist: "none"
  }
)

export function addUserName(state: GlobalState, name: string) {
  return {
    ...state,
    game: {
      ...state.game,
      name
    }
  }
}

export function addQuestions(state: GlobalState, questions: QuizQuestion[]) {
  return {
    ...state,
    questions: [...questions]
  }
}

export function addNewAnswer(state: GlobalState, answer: QuizAnswer) {
  const newAnswers = [...state.game.answers]
  const alreadyAnswered = state.game.answers.find(({ _questionId }) => _questionId === answer._questionId)

  if (alreadyAnswered) {
    const alreadyAnsweredIndex = state.game.answers.findIndex(({ _questionId }) => _questionId === answer._questionId);
    newAnswers.splice(alreadyAnsweredIndex, 1, answer)
  } else {
    newAnswers.push(answer)
  }
  return {
    ...state,
    game: {
      ...state.game,
      answers: [...newAnswers]
    }
  }
}