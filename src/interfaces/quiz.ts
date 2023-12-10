export interface QuizGame {
  playerName: string,
  answers: QuizAnswer[]
}

export interface QuizAnswer {
  _questionId: string
  _optionId: string
}

export interface QuizQuestion {
  id: string
  title: string
  options: QuizOption[]
}

export interface QuizOption {
  id: string
  text: string
}

