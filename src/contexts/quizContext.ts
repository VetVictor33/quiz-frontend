import { GlobalState, createStore } from "little-state-machine";
import { QuizAnswer, QuizQuestion } from "src/interfaces/quiz";

createStore(
  {
    game: {
      playerName: '',
      answers: []
    },
    currentQuestionIndex: 0,
    questions: [],
    correctAnswers: 0,
  },
  {
    persist: "action"
  }
)

export function addUserName(state: GlobalState, name: string) {
  return {
    ...state,
    game: {
      ...state.game,
      playerName: name
    }
  }
}

export function addQuestions(state: GlobalState, questions: QuizQuestion[]) {
  return {
    ...state,
    questions: [...questions]
  }
}

export function changeCurrentQuestionIndex(state: GlobalState, newIndex: number) {
  return {
    ...state,
    currentQuestionIndex: newIndex
  }
}

export function addNewAnswer(state: GlobalState, answer: QuizAnswer) {
  const newAnswers = [...state.game.answers]
  const alreadyAnswered = state.game.answers.find(({ _questionID }) => _questionID === answer._questionID)

  if (alreadyAnswered) {
    const alreadyAnsweredIndex = state.game.answers.findIndex(({ _questionID }) => _questionID === answer._questionID);
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

export function newGame(state: GlobalState) {
  return {
    ...state,
    game: {
      ...state.game,
      answers: []
    },
    currentQuestionIndex: 0,
    correctAnswers: 0
  }
}

export function changeCorrectAnswers(state: GlobalState, correctAnswers: number) {
  return {
    ...state,
    correctAnswers
  }
}