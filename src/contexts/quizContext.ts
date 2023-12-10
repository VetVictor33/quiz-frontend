import { GlobalState, createStore } from "little-state-machine";
import { QuizAnswer, QuizGame, QuizQuestion } from "src/interfaces/quiz";

createStore(
  {
    game: {} as QuizGame,
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
    questions: questions
  }
}

export function addNewAnswer(state: GlobalState, answer: QuizAnswer) {
  return {
    ...state,
    answers: {
      ...answer
    }
  }
}