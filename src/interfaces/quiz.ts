export interface QuizGame {
  playerName: string,
  answers: QuizAnswer[]
}

export interface QuizAnswer {
  _questionID: string
  _optionID: string
}

export interface QuizQuestion {
  _id: string
  title: string
  options: QuizOption[]
}

export interface QuizOption {
  _id: string
  text: string
}

